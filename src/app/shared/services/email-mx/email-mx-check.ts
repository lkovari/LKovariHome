const CLOUDFLARE_DNS = 'https://cloudflare-dns.com/dns-query';
const GOOGLE_DNS = 'https://dns.google/resolve';

export class MxLookupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MxLookupError';
  }
}

export function emailDomain(email: string): string | null {
  const trimmed = email.trim();
  const at = trimmed.lastIndexOf('@');
  if (at <= 0 || at === trimmed.length - 1) {
    return null;
  }
  return trimmed.slice(at + 1).toLowerCase();
}

export async function domainHasMailExchanger(domain: string): Promise<boolean> {
  try {
    return await queryMx(domain, CLOUDFLARE_DNS);
  } catch {
    return queryMx(domain, GOOGLE_DNS);
  }
}

async function queryMx(domain: string, endpoint: string): Promise<boolean> {
  const url = `${endpoint}?name=${encodeURIComponent(domain)}&type=MX`;
  const response = await fetch(url, {
    headers: { Accept: 'application/dns-json' },
  });
  if (!response.ok) {
    throw new MxLookupError('DNS lookup failed.');
  }
  return hasUsableMx(await response.json());
}

function hasUsableMx(payload: unknown): boolean {
  if (!payload || typeof payload !== 'object') {
    throw new MxLookupError('DNS lookup failed.');
  }

  const status = Reflect.get(payload, 'Status');
  if (typeof status === 'number' && status !== 0 && status !== 3) {
    throw new MxLookupError('DNS lookup failed.');
  }
  if (status === 3) {
    return false;
  }

  const answer = Reflect.get(payload, 'Answer');
  if (!Array.isArray(answer) || answer.length === 0) {
    return false;
  }

  return answer.some(record => isUsableMxRecord(record));
}

function isUsableMxRecord(record: unknown): boolean {
  if (!record || typeof record !== 'object') {
    return false;
  }
  const type = Reflect.get(record, 'type');
  if (type !== 15) {
    return false;
  }
  const data = Reflect.get(record, 'data');
  if (typeof data !== 'string') {
    return false;
  }
  return !isNullMx(data);
}

function isNullMx(data: string): boolean {
  const exchange = data.trim().split(/\s+/).at(-1);
  return exchange === '.' || exchange === '';
}
