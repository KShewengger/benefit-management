import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VoucherService } from './voucher.service';
import { VoucherRepository } from './voucher.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ VoucherRepository ]) ],
  providers: [ VoucherService ],
  exports: [ VoucherService ]
})
export class VoucherSharedModule {}
