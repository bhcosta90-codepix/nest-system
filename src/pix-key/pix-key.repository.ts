
import { Inject } from '@nestjs/common';
import { PixKey } from 'ts-package-system/domain/pix-key.entity';
import {PixKeyRepository as IPixKeyRepository} from 'ts-package-system/domain/repositories/pix-key.repository'
import { PixKeyValueObject } from 'ts-package-system/domain/vo/pix-key.vo';
import { Repository } from 'typeorm';
import { PixKeyModel } from './pix-key.model';

export class PixKeyRepository implements IPixKeyRepository {
    constructor(
        @Inject('PIX_KEY_MODEL')
        private pixKeyRepository: Repository<PixKeyModel>,
      ) {}


    async insertNewPix(pixKey: PixKey.Entity): Promise<void> {
        const response = await this.pixKeyRepository.create({
            id: pixKey.id,
            bank: pixKey.bank,
            kind: pixKey.kind,
            key: pixKey.key,
        });
        await this.pixKeyRepository.save(response);
    }
    
    async verifyPixKey(pixKey: PixKeyValueObject.ValueObject): Promise<boolean> {
        return !!await this.pixKeyRepository.count({
            where: {
                kind: pixKey.kind,
                key: pixKey.key,
            }
        });
    }

}