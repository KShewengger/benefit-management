import { Resolver, Query, ResolveField, Parent, Args, Int } from '@nestjs/graphql';

import { PartnerRevenueType, PartnerType } from '@partners/models/partner.type';
import { PartnerService } from '@shared/partner/partner.service';
import { VoucherService } from '@shared/voucher/voucher.service';

import { Voucher } from '@vouchers/models/voucher.entity';
import { Partner } from '@partners/models/partner.entity';


@Resolver(() => PartnerType)
export class PartnerResolver {

  constructor(
    private partnerService: PartnerService,
    private voucherService: VoucherService
  ) {}

  @Query(() => [ PartnerType ])
  async partners() {
    return this.partnerService.getAllPartners();
  }

  @Query(() => PartnerRevenueType)
  async partnerRevenue(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.partnerService.getPartnerRevenue(id);
  }

  @ResolveField(() => [ Voucher ])
  async vouchers(@Parent() partner: Partner) {
    return this.voucherService.getVouchersByPartnerId(partner.id);
  }

}

