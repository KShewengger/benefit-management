import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompaniesModule } from '@companies/companies.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    TypeOrmProviderModule,
    CompaniesModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
