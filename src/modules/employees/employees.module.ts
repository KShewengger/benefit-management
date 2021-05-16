import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesController } from '@employees/employees.controller';
import { EmployeeService } from '@employees/providers/employee.service';
import { EmployeeResolver } from '@employees/providers/employee.resolver';
import { EmployeeRepository } from '@employees/providers/employee.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ EmployeeRepository ]) ],
  controllers: [ EmployeesController ],
  providers: [ EmployeeService, EmployeeResolver ]
})
export class EmployeesModule {}
