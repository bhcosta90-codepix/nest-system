import { Module } from '@nestjs/common';
import { transactionProvider } from './transaction.provider';
import { DatabaseModule } from '../database/database.module';
import { PixKeyModule } from '../pix-key/pix-key.module';
import { EventModule } from '../event/event.module';

@Module({
  imports: [DatabaseModule, PixKeyModule, EventModule],
  providers: [...transactionProvider],
  exports: ['TRANSACTION_KEY_USE_CASE_CREATE'],
})
export class TransactionModule {}
