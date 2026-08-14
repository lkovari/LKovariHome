import { describe, expect, it, vi, afterEach } from 'vitest';
import { networkLoadTimeoutMs, withTimeout } from './network-load-timeout';

describe('networkLoadTimeoutMs', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('uses 15s when Network Information API is missing', () => {
    vi.stubGlobal('navigator', {});
    expect(networkLoadTimeoutMs()).toBe(15_000);
  });

  it('uses 60s for slow-2g', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: 'slow-2g', downlink: 0.05, saveData: false },
    });
    expect(networkLoadTimeoutMs()).toBe(60_000);
  });

  it('uses 45s for 2g', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: '2g', downlink: 0.2, saveData: false },
    });
    expect(networkLoadTimeoutMs()).toBe(45_000);
  });

  it('uses 20s for 3g', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: '3g', downlink: 0.7, saveData: false },
    });
    expect(networkLoadTimeoutMs()).toBe(20_000);
  });

  it('uses 12s for 4g', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: '4g', downlink: 4, saveData: false },
    });
    expect(networkLoadTimeoutMs()).toBe(12_000);
  });

  it('uses 8s for 4g with 5G-class downlink', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: '4g', downlink: 12, saveData: false },
    });
    expect(networkLoadTimeoutMs()).toBe(8_000);
  });

  it('uses 45s when save-data is on', () => {
    vi.stubGlobal('navigator', {
      connection: { effectiveType: '4g', downlink: 12, saveData: true },
    });
    expect(networkLoadTimeoutMs()).toBe(45_000);
  });
});

describe('withTimeout', () => {
  it('resolves when the work finishes in time', async () => {
    await expect(withTimeout(Promise.resolve('ok'), 50)).resolves.toBe('ok');
  });

  it('rejects with NetworkLoadError on timeout', async () => {
    vi.useFakeTimers();
    const pending = withTimeout(new Promise(() => undefined), 20);
    const assertion = expect(pending).rejects.toMatchObject({
      name: 'NetworkLoadError',
      reason: 'timeout',
    });
    await vi.advanceTimersByTimeAsync(20);
    await assertion;
    vi.useRealTimers();
  });

  it('uses a custom timeout message when provided', async () => {
    vi.useFakeTimers();
    const pending = withTimeout(
      new Promise(() => undefined),
      20,
      'Could not verify the email domain in time. Check your connection and try again.',
    );
    const assertion = expect(pending).rejects.toMatchObject({
      message:
        'Could not verify the email domain in time. Check your connection and try again.',
    });
    await vi.advanceTimersByTimeAsync(20);
    await assertion;
    vi.useRealTimers();
  });
});
