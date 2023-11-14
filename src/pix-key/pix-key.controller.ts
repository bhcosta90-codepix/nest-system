import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Create } from './dto/create.dto';
import {PixKeyRepository} from 'ts-package-system/domain/repositories/pix-key.repository'
import {UseCase as UseCaseCreate} from 'ts-package-system/infra/use-cases/pix-key/create.use-case'

@Controller('api/pix')
export class PixKeyController {

  @Inject('PIX_KEY_USE_CASE_CREATE')
  private readonly useCaseCreate: UseCaseCreate.Create;

  @Post()
  async create(@Body() data: Create) {
    return {
      data: await this.useCaseCreate.handle(data)
    };
  }
}
