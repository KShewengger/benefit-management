import { Resolver, Query, ResolveField, Parent, Float } from '@nestjs/graphql';

import { VoucherType } from '@vouchers/models/voucher.type';
import { VoucherService } from '@shared/voucher/voucher.service';
import { PartnerService } from '@shared/partner/partner.service';

import { Voucher } from '@vouchers/models/voucher.entity';
import { Partner } from '@partners/models/partner.entity';


@Resolver(() => VoucherType)
export class VoucherResolver {

  constructor(
    private voucherService: VoucherService,
    private partnerService: PartnerService
  ) {}

  @Query(() => [ VoucherType ])
  async vouchers() {
    return this.voucherService.getAllVouchers();
  }

  @ResolveField(() => Partner)
  async partner(@Parent() voucher: Voucher) {
    return this.partnerService.getPartner(voucher.partnerId);
  }

  @ResolveField(() => Float)
  async totalRevenue(@Parent() voucher: Voucher) {
    const { amount, orders } = voucher;
    return amount * orders.length;
  }

}

