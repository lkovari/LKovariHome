import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WaitSpinnerService {
  private readonly refCount = signal(0);

  readonly visible = computed(() => this.refCount() > 0);

  begin(): void {
    this.refCount.update(count => count + 1);
  }

  end(): void {
    this.refCount.update(count => (count > 0 ? count - 1 : 0));
  }
}
