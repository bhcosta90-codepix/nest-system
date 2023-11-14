import { Module } from '@nestjs/common';
import { PixKeyController } from './pix-key.controller';
import { pixKeyProvider } from './pix-key.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PixKeyController],
  providers: [
    ...pixKeyProvider,
  ]
})
export class PixKeyModule {}
