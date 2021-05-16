import { Resolver, Query, Args } from '@nestjs/graphql';

import { CompanyType } from '@companies/common/company.type';
import { CompanyService } from '@companies/providers/company.service';


@Resolver(() => CompanyType)
export class CompanyResolver {

  constructor(private companyService: CompanyService) {}

  @Query(returns => [CompanyType])
  async companyEmployees() {
    return [];
  }

}

