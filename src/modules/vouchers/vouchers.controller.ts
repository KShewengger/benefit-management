import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { VoucherService } from '@vouchers/providers/voucher.service';
import { Voucher } from '@vouchers/common/voucher.entity';


@Controller('vouchers')
export class VouchersController {

  private logger = new Logger('VouchersController');

  constructor(private voucherService: VoucherService) {}

  @Get()
  async getAllVouchers(): Promise<Voucher[]> {
    return this.voucherService.getAllVouchers();
  }

}
