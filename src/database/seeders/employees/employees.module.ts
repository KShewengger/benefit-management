import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeders/shared/seed-create/seed-create.module';

import { Employee } from '@employees/models/employee.entity';
import { EmployeeSeederService } from './employees.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Employee ]),
    SeedCreateSharedModule
  ],
  providers: [ EmployeeSeederService ],
  exports: [ EmployeeSeederService ],
})
export class EmployeeSeederModule {}
