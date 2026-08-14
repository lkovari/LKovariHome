import { afterEach, describe, expect, it, vi } from 'vitest';
import { domainHasMailExchanger, emailDomain } from './email-mx-check';

describe('emailDomain', () => {
  it('returns the host after the last @, lowercased', () => {
    expect(emailDomain('Lala@Lila.HU')).toBe('lila.hu');
  });

  it('returns null when the address has no domain', () => {
    expect(emailDomain('nobody@')).toBeNull();
    expect(emailDomain('nobody')).toBeNull();
  });
});

describe('domainHasMailExchanger', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('returns true when DNS reports a usable MX record', async () => {
    stubDnsFetch([
      dnsJson({
        Status: 0,
        Answer: [{ type: 15, data: '10 smtp.google.com.' }],
      }),
    ]);

    await expect(domainHasMailExchanger('gmail.com')).resolves.toBe(true);
  });

  it('returns false when the domain has no MX records', async () => {
    stubDnsFetch([dnsJson({ Status: 0, Answer: [] })]);

    await expect(domainHasMailExchanger('lila.hu')).resolves.toBe(false);
  });

  it('returns false for NXDOMAIN', async () => {
    stubDnsFetch([dnsJson({ Status: 3 })]);

    await expect(
      domainHasMailExchanger('no-such-domain.invalid'),
    ).resolves.toBe(false);
  });

  it('returns false for a null MX (RFC 7505)', async () => {
    stubDnsFetch([
      dnsJson({
        Status: 0,
        Answer: [{ type: 15, data: '0 .' }],
      }),
    ]);

    await expect(domainHasMailExchanger('example.com')).resolves.toBe(false);
  });

  it('falls back to Google DNS when Cloudflare lookup fails', async () => {
    stubDnsFetch([
      Promise.reject(new TypeError('Failed to fetch')),
      dnsJson({
        Status: 0,
        Answer: [{ type: 15, data: '10 mx.example.net.' }],
      }),
    ]);

    await expect(domainHasMailExchanger('example.net')).resolves.toBe(true);
  });
});

function dnsJson(body: unknown): Promise<{ ok: boolean; json: () => Promise<unknown> }> {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(body),
  });
}

function stubDnsFetch(
  responses: Array<Promise<{ ok: boolean; json: () => Promise<unknown> }>>,
): void {
  const fetchMock = vi.fn();
  for (const response of responses) {
    fetchMock.mockImplementationOnce(() => response);
  }
  vi.stubGlobal('fetch', fetchMock);
}
