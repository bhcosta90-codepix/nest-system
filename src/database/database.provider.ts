import { PixKeyModel } from 'src/pix-key/pix-key.model';
import { DataSource } from 'typeorm';
import { TransactionModel } from '../transaction/transaction.model';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'pix-key',
        entities: [PixKeyModel, TransactionModel],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
