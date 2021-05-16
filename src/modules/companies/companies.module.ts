import { Module } from '@nestjs/common';

import { SharedModule } from '@shared/shared.module';
import { CompaniesController } from '@companies/companies.controller';
import { CompanyResolver } from '@companies/providers/company.resolver';


@Module({
  imports: [ SharedModule ],
  controllers: [ CompaniesController ],
  providers: [ CompanyResolver ]
})
export class CompaniesModule {}
