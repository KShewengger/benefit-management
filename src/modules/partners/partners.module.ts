import { Module } from '@nestjs/common';

import { VoucherSharedModule } from '@shared/voucher/voucher.module';
import { PartnerSharedModule } from '@shared/partner/partner.module';

import { PartnersController } from '@partners/partners.controller';
import { PartnerResolver } from '@partners/providers/partner.resolver';


@Module({
  imports: [
    PartnerSharedModule,
    VoucherSharedModule
  ],
  controllers: [ PartnersController ],
  providers: [ PartnerResolver ]
})
export class PartnersModule {}
