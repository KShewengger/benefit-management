import { Module } from '@nestjs/common';

import { CompanySharedModule } from '@shared/company/company.module';
import { EmployeeSharedModule } from '@shared/employee/employee.module';
import { OrderSharedModule } from '@shared/order/order.module';

import { EmployeesController } from '@employees/employees.controller';
import { EmployeeResolver } from '@employees/providers/employee.resolver';


@Module({
  imports: [
    EmployeeSharedModule,
    CompanySharedModule,
    OrderSharedModule
  ],
  controllers: [ EmployeesController ],
  providers: [ EmployeeResolver ]
})
export class EmployeesModule {}
