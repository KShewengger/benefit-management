import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartnerService } from './partner.service';
import { PartnerRepository } from './partner.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ PartnerRepository ]) ],
  providers: [ PartnerService ],
  exports: [ PartnerService ]
})
export class PartnerSharedModule {}
