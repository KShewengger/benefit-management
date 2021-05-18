import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';

import { EmployeeType } from '@employees/types/employee.type';
import { EmployeeBenefitStatusType } from '@employees/types/employee-benefit.type';
import { EmployeeService } from '@shared/employee/employee.service';
import { Employee } from '@employees/models/employee.entity';
import { GetEmployeesBenefitStatusArgs } from '@employees/dto/get-employees-benefit-status.dto';

import { Company } from '@companies/models/company.entity';
import { CompanyService } from '@shared/company/company.service';

import { Order } from '@orders/models/order.entity';
import { OrderService } from '@shared/order/order.service';


@Resolver(() => EmployeeType)
export class EmployeeResolver {

  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private orderService: OrderService
  ) {}

  @Query(() => [ EmployeeType ])
  async employees() {
    return this.employeeService.getAllEmployees();
  }

  @Query(() => [ EmployeeBenefitStatusType ])
  async employeesBenefitStatus(@Args() getEmployeesBenefitArgs: GetEmployeesBenefitStatusArgs) {
    console.log(getEmployeesBenefitArgs);
    return [];
  }

  @ResolveField(() => Company)
  async company(@Parent() employee: Employee) {
    return this.companyService.getCompany(employee.companyId);
  }

  @ResolveField(() => Order)
  async orders(@Parent() employee: Employee) {
    return this.orderService.getAllOrders(employee.orderId);
  }

}

