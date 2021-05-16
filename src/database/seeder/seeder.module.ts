import { Logger, Module } from '@nestjs/common';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompanySeederModule } from '@seeder/company/company.module';
import { EmployeeSeederModule } from '@seeder/employee/employee.module';

import { Seeder } from '@seeder/seeder';


@Module({
  imports: [
    TypeOrmProviderModule,
    CompanySeederModule,
    EmployeeSeederModule
  ],
  providers: [
    Logger,
    Seeder
  ],
})
export class SeederModule {}
