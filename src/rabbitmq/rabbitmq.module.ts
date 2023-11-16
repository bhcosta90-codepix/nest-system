import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { TransactionCreate } from '../transaction/consumers/transaction.create';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      // useFactory: (configService: ConfigService) => ({
      useFactory: () => ({
        uri: 'amqp://root:root@localhost:5673',
        // registerHandlers:
        //   configService.get('RABBITMQ_ENABLE_HANDLERS') === 'true',
        registerHandlers: true,
      }),
      // inject: [ConfigService],
      exports: [RabbitMQModule],
    }),
    TransactionModule,
  ],
  providers: [TransactionCreate],
})
export class RabbitmqModule {}
