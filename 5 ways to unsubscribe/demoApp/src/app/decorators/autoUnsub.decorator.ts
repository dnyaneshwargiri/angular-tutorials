import { Subscription } from 'rxjs';

export function AutoUnsubscribe() {
  return function (constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        const property = this[prop];
        if (property instanceof Subscription) {
          property.unsubscribe();
        }
      }

      if (original && typeof original === 'function') {
        original.apply(this, arguments);
      }
    };
  };
}
