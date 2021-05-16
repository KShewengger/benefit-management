import { Resolver, Query } from '@nestjs/graphql';

import { CompanyType, CompanyEmployeeType } from '@companies/common/company.type';
import { CompanyService } from '@companies/providers/company.service';


@Resolver(() => CompanyType)
export class CompanyResolver {

  constructor(private companyService: CompanyService) {}

  @Query(returns => [CompanyType])
  async companies() {
    return this.companyService.getAllCompanies();
  }

  @Query(returns => [CompanyEmployeeType])
  async companyEmployees() {
    return [];
  }

}

