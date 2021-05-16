import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';

import { Company } from '@companies/common/company.entity';
import { CompanyType } from '@companies/common/company.type';
import { CompanyService } from '@shared/company/company.service';

import { Employee } from '@employees/common/employee.entity';


@Resolver(() => CompanyType)
export class CompanyResolver {

  constructor(private companyService: CompanyService) {}

  @Query(() => [ CompanyType ])
  async companies() {
    return this.companyService.getAllCompanies();
  }

  @ResolveField(() => [ Employee ])
  async employees(@Parent() company: Company) {
    return company.employees;
  }

}

