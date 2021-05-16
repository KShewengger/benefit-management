import { Resolver, Query } from '@nestjs/graphql';

import { VoucherType } from '@vouchers/common/voucher.type';
import { VoucherService } from '@vouchers/providers/voucher.service';


@Resolver(() => VoucherType)
export class VoucherResolver {

  constructor(private voucherService: VoucherService) {}

  @Query(() => [ VoucherType ])
  async vouchers() {
    return this.voucherService.getAllVouchers();
  }

}

