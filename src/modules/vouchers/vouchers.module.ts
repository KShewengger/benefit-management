import { Module } from '@nestjs/common';

import { VoucherSharedModule } from '@shared/voucher/voucher.module';
import { PartnerSharedModule } from '@shared/partner/partner.module';

import { VouchersController } from '@vouchers/vouchers.controller';
import { VoucherResolver } from '@vouchers/providers/voucher.resolver';


@Module({
  imports: [
    VoucherSharedModule,
    PartnerSharedModule
  ],
  controllers: [ VouchersController ],
  providers: [ VoucherResolver ]
})
export class VouchersModule {}
