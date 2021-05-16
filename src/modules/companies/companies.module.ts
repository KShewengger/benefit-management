import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompaniesController } from '@companies/companies.controller';
import { CompanyService } from '@companies/providers/company.service';
import { CompanyResolver } from '@companies/providers/company.resolver';
import { CompanyRepository } from '@companies/providers/company.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ CompanyRepository ]) ],
  controllers: [ CompaniesController ],
  providers: [ CompanyService, CompanyResolver ]
})
export class CompaniesModule {}
