import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeder/shared/seed-create/seed-create.module';

import { Company } from '@companies/common/company.entity';
import { CompanySeederService } from './company.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Company ]),
    SeedCreateSharedModule
  ],
  providers: [ CompanySeederService ],
  exports: [ CompanySeederService ],
})
export class CompanySeederModule {}
