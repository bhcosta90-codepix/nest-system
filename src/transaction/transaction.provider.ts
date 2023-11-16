import { DataSource, Repository } from 'typeorm';
import { TransactionModel } from './transaction.model';
import { TransactionRepository } from './transaction.repository';
import { TransactionRepository as ITransactionRepository } from 'ts-package-system/domain/repositories/transaction.repository';
import { PixKeyRepository as IPixKeyRepository } from 'ts-package-system/domain/repositories/pix-key.repository';
import { UseCase as UseCaseCreate } from 'ts-package-system/infra/use-cases/transaction/create.use-case';
import { EventManagerInterface } from 'ts-package-system/infra/event/event-manager.interface';
import { Provider } from '@nestjs/common';
import { TransactionListener } from './listeners/transaction.listener';

export const transactionProvider: Provider[] = [
  {
    provide: 'TRANSACTION_KEY_MODEL',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TransactionModel),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'TRANSACTION_KEY_REPOSITORY',
    useFactory: (repository: Repository<TransactionModel>) =>
      new TransactionRepository(repository),
    inject: ['TRANSACTION_KEY_MODEL'],
  },
  {
    provide: 'TRANSACTION_KEY_USE_CASE_CREATE',
    useFactory: (
      repository: ITransactionRepository,
      repositoryPixKey: IPixKeyRepository,
      event: EventManagerInterface,
    ) => new UseCaseCreate.CreateUseCase(repositoryPixKey, repository, event),
    inject: [
      'TRANSACTION_KEY_REPOSITORY',
      'PIX_KEY_REPOSITORY',
      'EVENT_MANAGER',
    ],
  },
  {
    provide: TransactionListener,
    useClass: TransactionListener,
  },
];
