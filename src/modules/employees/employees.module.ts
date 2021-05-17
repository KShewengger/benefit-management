import { Module } from '@nestjs/common';

import { CompanySharedModule } from '@shared/company/company.module';
import { EmployeeSharedModule } from '@shared/employee/employee.module';

import { EmployeesController } from '@employees/employees.controller';
import { EmployeeResolver } from '@employees/providers/employee.resolver';


@Module({
  imports: [
    EmployeeSharedModule,
    CompanySharedModule
  ],
  controllers: [ EmployeesController ],
  providers: [ EmployeeResolver ]
})
export class EmployeesModule {}
