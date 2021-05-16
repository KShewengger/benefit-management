import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Voucher } from '@vouchers/common/voucher.entity';
import { VoucherSeederService } from './voucher.service';


@Module({
  imports: [ TypeOrmModule.forFeature([ Voucher ]) ],
  providers: [ VoucherSeederService ],
  exports: [ VoucherSeederService ],
})
export class VoucherSeederModule {}
