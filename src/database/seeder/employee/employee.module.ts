import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeder/shared/seed-create/seed-create.module';

import { Employee } from '@employees/common/employee.entity';
import { EmployeeSeederService } from './employee.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Employee ]),
    SeedCreateSharedModule
  ],
  providers: [ EmployeeSeederService ],
  exports: [ EmployeeSeederService ],
})
export class EmployeeSeederModule {}
