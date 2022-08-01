import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import allModule from './all-module';

@Module({
  imports: [...allModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
