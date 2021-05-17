import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyService } from './company.service';
import { CompanyRepository } from './company.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ CompanyRepository ]) ],
  providers: [ CompanyService ],
  exports: [ CompanyService ]
})
export class CompanySharedModule {}
