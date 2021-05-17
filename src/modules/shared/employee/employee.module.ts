import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ EmployeeRepository ]) ],
  providers: [ EmployeeService ],
  exports: [ EmployeeService ]
})
export class EmployeeSharedModule {}
