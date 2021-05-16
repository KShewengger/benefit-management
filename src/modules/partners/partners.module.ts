import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartnersController } from '@partners/partners.controller';
import { PartnerService } from '@partners/providers/partner.service';
import { PartnerResolver } from '@partners/providers/partner.resolver';
import { PartnerRepository } from '@partners/providers/partner.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ PartnerRepository ]) ],
  controllers: [ PartnersController ],
  providers: [ PartnerService, PartnerResolver ]
})
export class PartnersModule {}
