import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class NavService {

  // event emmitter to emit the data.
  navchange: EventEmitter<any> = new EventEmitter();
  constructor() {}
  emitNavChangeEvent(eventData) {
    this.navchange.emit(eventData);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}
