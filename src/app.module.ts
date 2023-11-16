import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PixKeyModule } from './pix-key/pix-key.module';
import { DatabaseModule } from './database/database.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './error.interceptor';
import { TransactionModule } from './transaction/transaction.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { EventModule } from './event/event.module';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DatabaseModule,
    PixKeyModule,
    TransactionModule,
    RabbitmqModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    {
      provide: EventEmitter2,
      useValue: new EventEmitter2(),
    },
  ],
})
export class AppModule {}
