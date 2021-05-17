import { Module } from '@nestjs/common';

import { CompanySharedModule } from '@shared/company/company.module';
import { CompaniesController } from '@companies/companies.controller';
import { CompanyResolver } from '@companies/providers/company.resolver';


@Module({
  imports: [ CompanySharedModule ],
  controllers: [ CompaniesController ],
  providers: [ CompanyResolver ]
})
export class CompaniesModule {}
