import { TransactionRepository as ITransactionRepository } from 'ts-package-system/domain/repositories/transaction.repository';
import { Transaction } from 'ts-package-system/domain/transaction.entity';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransactionModel } from './transaction.model';

export class TransactionRepository implements ITransactionRepository {
  constructor(
    @Inject('TRANSACTION_MODEL')
    private transactionModel: Repository<TransactionModel>,
  ) {}

  async insertNewTransaction(transaction: Transaction.Entity): Promise<void> {
    const response = await this.transactionModel.create({
      id: transaction.id,
      kind: transaction.kind,
      key: transaction.key,
      status: transaction.status,
      ...transaction.toJSON(),
    });
    await this.transactionModel.save(response);
  }

  async updateStatus(id: string, status: Transaction.Status): Promise<void> {
    const transactionToUpdate = await this.transactionModel.findOneBy({
      id,
    });

    transactionToUpdate.status = status;
    await this.transactionModel.save(transactionToUpdate);
  }
}
