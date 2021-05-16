import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TYPEORM_OPTIONS } from '@config/database/typeorm/typeorm.config';


@Module({
  imports: [ TypeOrmModule.forRoot(TYPEORM_OPTIONS) ]
})
export class TypeOrmProviderModule {}
