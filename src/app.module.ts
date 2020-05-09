import { ReceiverController } from './receiver.controller';
import { SenderController } from './sender.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
        ReceiverController, 
        SenderController, AppController],
  providers: [AppService],
})
export class AppModule {}
