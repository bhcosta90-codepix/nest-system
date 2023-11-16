import { OnEvent } from '@nestjs/event-emitter';

export class TransactionListener {
  @OnEvent('transaction.processed')
  handleTransactionProcessed(payload) {
    console.log(payload);
  }
}
