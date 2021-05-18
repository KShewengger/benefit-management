import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeders/shared/seed-create/seed-create.module';

import { Voucher } from '@vouchers/models/voucher.entity';
import { VoucherSeederService } from './vouchers.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Voucher ]),
    SeedCreateSharedModule
  ],
  providers: [ VoucherSeederService ],
  exports: [ VoucherSeederService ],
})
export class VoucherSeederModule {}
