import { Module } from '@nestjs/common';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmProviderModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
