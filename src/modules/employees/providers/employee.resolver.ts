import { Resolver, Query } from '@nestjs/graphql';

import { EmployeeType, EmployeeExpenditureType } from '@employees/common/employee.type';
import { EmployeeService } from '@employees/providers/employee.service';


@Resolver(() => EmployeeType)
export class EmployeeResolver {

  constructor(private employeeService: EmployeeService) {}

  @Query(returns => [EmployeeType])
  async employees() {
    return this.employeeService.getAllEmployees();
  }

  @Query(returns => [EmployeeExpenditureType])
  async employeesExpenditures() {
    return [];
  }

}

