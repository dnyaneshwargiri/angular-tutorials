export interface BackgroundSyncManager {
  getTask(name: string): Promise<BackgroundSyncTask | undefined>;
  register(
    name: string,
    options?: BackgroundSyncRegistrationOptions
  ): Promise<BackgroundSyncTask>;
}

interface BackgroundSyncTask {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
  lastChance: boolean;
}

interface BackgroundSyncRegistrationOptions {
  minInterval?: number;
  networkState?: 'online' | 'offline' | 'any';
}
