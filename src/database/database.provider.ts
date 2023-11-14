import { PixKeyModel } from 'src/pix-key/pix-key.model';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type :"sqlite",
        database: "pix-key",
        entities: [PixKeyModel],
        synchronize: true
      });

      return dataSource.initialize();
    },
  },
];