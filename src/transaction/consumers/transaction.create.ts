import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Inject, Injectable } from '@nestjs/common';
import { UseCase as UseCaseCreate } from 'ts-package-system/infra/use-cases/transaction/create.use-case';

@Injectable()
export class TransactionCreate {
  @Inject('TRANSACTION_KEY_USE_CASE_CREATE')
  protected useCase: UseCaseCreate.CreateUseCase;

  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'transaction.creating',
    queue: 'transaction.creating',
  })
  async consumer(msg: any) {
    this.useCase.handle({
      kind: msg.kind,
      description: msg.description,
      bank: msg.bank,
      key: msg.key,
      id: msg.id,
      value: msg.value,
    });
  }
}
