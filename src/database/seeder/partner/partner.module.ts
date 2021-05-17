import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeder/shared/seed-create/seed-create.module';

import { Partner } from '@partners/common/partner.entity';
import { PartnerSeederService } from './partner.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Partner ]),
    SeedCreateSharedModule
  ],
  providers: [ PartnerSeederService ],
  exports: [ PartnerSeederService ],
})
export class PartnerSeederModule {}
