import { Module } from '@nestjs/common';
import { EventManager } from './event-manager';

@Module({
  providers: [
    {
      provide: 'EVENT_MANAGER',
      useClass: EventManager,
    },
  ],
  exports: ['EVENT_MANAGER'],
})
export class EventModule {}
