import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeders/shared/seed-create/seed-create.module';

import { Partner } from '@partners/common/partner.entity';
import { PartnerSeederService } from './partners.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Partner ]),
    SeedCreateSharedModule
  ],
  providers: [ PartnerSeederService ],
  exports: [ PartnerSeederService ],
})
export class PartnerSeederModule {}
