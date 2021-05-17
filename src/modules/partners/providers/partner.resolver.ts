import { Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";

import { PartnerType } from '@partners/common/partner.type';
import { PartnerService } from '@shared/partner/partner.service';
import { VoucherService } from '@shared/voucher/voucher.service';

import { Voucher } from '@vouchers/common/voucher.entity';
import { Partner } from '@partners/common/partner.entity';


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

  @ResolveField(() => [ Voucher ])
  async vouchers(@Parent() partner: Partner) {
    return this.voucherService.getAllVouchers(partner.id);
  }

}

