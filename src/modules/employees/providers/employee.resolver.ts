import { Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";

import { EmployeeType } from '@employees/common/employee.type';
import { EmployeeService } from '@shared/employee/employee.service';
import { Employee } from '@employees/common/employee.entity';

import { Company } from '@companies/common/company.entity';
import { CompanyService } from '@shared/company/company.service';

import { Order } from '@orders/common/order.entity';
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

  @ResolveField(() => Company)
  async company(@Parent() employee: Employee) {
    return this.companyService.getCompany(employee.companyId);
  }

  @ResolveField(() => Order)
  async orders(@Parent() employee: Employee) {
    return this.orderService.getAllOrders(employee.orderId);
  }

}

