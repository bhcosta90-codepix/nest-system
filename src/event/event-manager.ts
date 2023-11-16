import { EventManagerInterface } from 'ts-package-system/infra/event/event-manager.interface';
import { EventInterface } from 'ts-package-system/@shared/domain/events/event.interface';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Inject } from '@nestjs/common';

export class EventManager implements EventManagerInterface {
  constructor(@Inject(EventEmitter2) protected eventEmitter: EventEmitter2) {}

  dispatch(events: EventInterface[]): void {
    events.map((event: EventInterface) => {
      console.log(event.name());
      this.eventEmitter.emit(event.name(), event);
    });
  }
}
