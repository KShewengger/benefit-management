import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyService } from './company/company.service';
import { CompanyRepository } from './company/company.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ CompanyRepository ]) ],
  providers: [ CompanyService ],
  exports: [ CompanyService ]
})
export class SharedModule {}
