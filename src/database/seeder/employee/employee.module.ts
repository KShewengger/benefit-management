import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from '@employees/common/employee.entity';
import { EmployeeSeederService } from './employee.service';


@Module({
  imports: [ TypeOrmModule.forFeature([ Employee ]) ],
  providers: [ EmployeeSeederService ],
  exports: [ EmployeeSeederService ],
})
export class EmployeeSeederModule {}
