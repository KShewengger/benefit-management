import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VouchersController } from '@vouchers/vouchers.controller';
import { VoucherService } from '@vouchers/providers/voucher.service';
import { VoucherResolver } from '@vouchers/providers/voucher.resolver';
import { VoucherRepository } from '@vouchers/providers/voucher.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ VoucherRepository ]) ],
  controllers: [ VouchersController ],
  providers: [ VoucherService, VoucherResolver ]
})
export class VouchersModule {}
