import { Resolver, Query } from '@nestjs/graphql';

import { EmployeeExpenditureType } from '@employees/common/employee.type';
import { EmployeeService } from '@employees/providers/employee.service';


@Resolver(() => EmployeeExpenditureType)
export class EmployeeResolver {

  constructor(private employeeService: EmployeeService) {}

  @Query(returns => [EmployeeExpenditureType])
  async employeesExpenditures() {
    return [];
  }

}

