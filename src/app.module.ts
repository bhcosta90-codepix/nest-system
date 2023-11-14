import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PixKeyModule } from './pix-key/pix-key.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, PixKeyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
