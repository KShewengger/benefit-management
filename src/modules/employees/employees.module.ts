import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanySharedModule } from '@shared/company/company.module';

import { EmployeesController } from '@employees/employees.controller';
import { EmployeeService } from '@employees/providers/employee.service';
import { EmployeeResolver } from '@employees/providers/employee.resolver';
import { EmployeeRepository } from '@employees/providers/employee.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([ EmployeeRepository ]),
    CompanySharedModule
  ],
  controllers: [ EmployeesController ],
  providers: [ EmployeeService, EmployeeResolver ]
})
export class EmployeesModule {}
