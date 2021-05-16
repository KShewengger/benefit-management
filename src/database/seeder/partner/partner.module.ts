import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Partner } from '@partners/common/partner.entity';
import { PartnerSeederService } from './partner.service';


@Module({
  imports: [ TypeOrmModule.forFeature([ Partner ]) ],
  providers: [ PartnerSeederService ],
  exports: [ PartnerSeederService ],
})
export class PartnerSeederModule {}
