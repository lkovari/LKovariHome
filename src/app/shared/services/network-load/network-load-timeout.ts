export class NetworkLoadError extends Error {
  constructor(
    readonly reason: 'offline' | 'timeout',
    message: string,
  ) {
    super(message);
    this.name = 'NetworkLoadError';
  }
}

const TIMEOUT_SLOW_2G_MS = 60_000;
const TIMEOUT_2G_MS = 45_000;
const TIMEOUT_3G_MS = 20_000;
const TIMEOUT_4G_MS = 12_000;
const TIMEOUT_5G_MS = 8_000;
const TIMEOUT_UNKNOWN_MS = 15_000;
const DOWNLINK_5G_MBPS = 10;

export function networkLoadTimeoutMs(): number {
  const connection = readConnection();
  if (!connection) {
    return TIMEOUT_UNKNOWN_MS;
  }

  if (connection.saveData) {
    return TIMEOUT_2G_MS;
  }

  if (connection.effectiveType === 'slow-2g') {
    return TIMEOUT_SLOW_2G_MS;
  }
  if (connection.effectiveType === '2g') {
    return TIMEOUT_2G_MS;
  }
  if (connection.effectiveType === '3g') {
    return TIMEOUT_3G_MS;
  }
  if (connection.effectiveType === '4g') {
    if (connection.downlink >= DOWNLINK_5G_MBPS) {
      return TIMEOUT_5G_MS;
    }
    return TIMEOUT_4G_MS;
  }

  return TIMEOUT_UNKNOWN_MS;
}

export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutMessage = 'The knowledge base took too long to load on this network. Check your connection and try again.',
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new NetworkLoadError('timeout', timeoutMessage));
    }, timeoutMs);

    promise.then(
      value => {
        clearTimeout(timer);
        resolve(value);
      },
      error => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function readConnection(): {
  effectiveType: string;
  downlink: number;
  saveData: boolean;
} | null {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return null;
  }

  const raw = Reflect.get(navigator, 'connection');
  if (!raw || typeof raw !== 'object') {
    return null;
  }

  const effectiveType = Reflect.get(raw, 'effectiveType');
  const downlink = Reflect.get(raw, 'downlink');
  const saveData = Reflect.get(raw, 'saveData');

  return {
    effectiveType: typeof effectiveType === 'string' ? effectiveType : 'unknown',
    downlink: typeof downlink === 'number' ? downlink : 0,
    saveData: saveData === true,
  };
}
