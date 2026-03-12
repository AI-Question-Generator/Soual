import { Injectable } from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';

interface StorageChange {
  key: string;
  value: unknown;
  oldValue: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly _storage$ = new BehaviorSubject<StorageChange | null>(null);

  constructor() {
    // Listen for storage events (triggered when localStorage changes in other tabs)
    this.initStorageListener();
  }

  /**
   * Get item from localStorage
   * @param key - The key to retrieve
   * @returns The parsed value or null if not found
   */
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage:`, error);
      return null;
    }
  }

  /**
   * Set item in localStorage
   * @param key - The key to set
   * @param value - The value to store
   */
  setItem(key: string, value: unknown): void {
    try {
      const oldValue = this.getItem(key);
      localStorage.setItem(key, JSON.stringify(value));

      // Emit the change
      this._storage$.next({ key, value, oldValue });
    } catch (error) {
      console.error(`Error setting item in localStorage:`, error);
    }
  }

  /**
   * Remove item from localStorage
   * @param key - The key to remove
   */
  removeItem(key: string): void {
    try {
      const oldValue = this.getItem(key);
      localStorage.removeItem(key);

      // Emit the change
      this._storage$.next({ key, value: null, oldValue });
    } catch (error) {
      console.error(`Error removing item from localStorage:`, error);
    }
  }

  /**
   * Clear all items from localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
      this._storage$.next({ key: '', value: null, oldValue: null });
    } catch (error) {
      console.error(`Error clearing localStorage:`, error);
    }
  }

  /**
   * Check if a key exists in localStorage
   * @param key - The key to check
   * @returns True if the key exists, false otherwise
   */
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Get all keys from localStorage
   * @returns Array of all keys
   */
  getAllKeys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) keys.push(key);
    }
    return keys;
  }

  /**
   * Get an observable that emits when localStorage changes
   * @returns Observable of storage changes
   */
  getStorageChanges() {
    return this._storage$.asObservable().pipe(filter((change) => change !== null));
  }

  /**
   * Get an observable that emits when a specific key changes
   * @param key - The key to watch
   * @returns Observable of the key's value changes
   */
  watchKey<T>(key: string): Observable<T | null> {
    return this.getStorageChanges().pipe(
      filter((change) => change.key === key),
      map((change) => change.value as T | null),
    );
  }

  /**
   * Get an observable that emits the current and future values of a key
   * @param key - The key to watch
   * @returns Observable of the key's current and future values
   */
  watchKeyWithInitialValue<T>(key: string): Observable<T | null> {
    const currentValue = this.getItem<T>(key);
    return this.watchKey<T>(key).pipe(startWith(currentValue));
  }

  /**
   * Initialize storage event listener for cross-tab synchronization
   */
  private initStorageListener(): void {
    // Listen for storage events from other tabs/windows
    fromEvent<StorageEvent>(window, 'storage').subscribe((event) => {
      if (event.key && event.storageArea === localStorage) {
        const oldValue = event.oldValue ? JSON.parse(event.oldValue) : null;
        const newValue = event.newValue ? JSON.parse(event.newValue) : null;

        this._storage$.next({
          key: event.key,
          value: newValue,
          oldValue: oldValue,
        });
      }
    });
  }
}
