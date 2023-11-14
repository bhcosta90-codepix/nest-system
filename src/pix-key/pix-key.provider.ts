import { DataSource } from 'typeorm';
import { PixKeyModel } from './pix-key.model';
import { PixKeyRepository } from './pix-key.repository';
import { Repository } from 'typeorm';
import {UseCase as UseCaseCreate} from 'ts-package-system/infra/use-cases/pix-key/create.use-case'
import {PixKeyRepository as IPixKeyRepository} from 'ts-package-system/domain/repositories/pix-key.repository'

export const pixKeyProvider = [
    {
        provide: 'PIX_KEY_MODEL',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PixKeyModel),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'PIX_KEY_REPOSITORY',
        useFactory: (repository: Repository<PixKeyModel>) => new PixKeyRepository(repository),
        inject: ['PIX_KEY_MODEL'],
    },
    {
        provide: 'PIX_KEY_USE_CASE_CREATE',
        useFactory: (repository: IPixKeyRepository) => new UseCaseCreate.Create(repository),
        inject: ['PIX_KEY_REPOSITORY'],
    }
]