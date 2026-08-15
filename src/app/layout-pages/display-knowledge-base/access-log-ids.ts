export async function accessLogDocumentId(
  email: string,
  locale: string,
  knowledgeBaseId: string,
): Promise<string> {
  return sha256Hex(`log\0${email}\0${locale}\0${knowledgeBaseId}`);
}

export async function visitorDocumentId(
  email: string,
  knowledgeBaseId: string,
): Promise<string> {
  return sha256Hex(`visitor\0${email}\0${knowledgeBaseId}`);
}

export function nextUniqueVisitorCount(
  current: unknown,
  visitorAlreadySeen: boolean,
): number {
  const base =
    typeof current === 'number' && Number.isInteger(current) && current >= 0
      ? current
      : 0;
  if (visitorAlreadySeen) {
    return base;
  }
  return base + 1;
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), byte =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}
