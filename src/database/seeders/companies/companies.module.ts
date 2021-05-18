import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeders/shared/seed-create/seed-create.module';

import { Company } from '@companies/models/company.entity';
import { CompanySeederService } from './companies.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Company ]),
    SeedCreateSharedModule
  ],
  providers: [ CompanySeederService ],
  exports: [ CompanySeederService ],
})
export class CompanySeederModule {}
