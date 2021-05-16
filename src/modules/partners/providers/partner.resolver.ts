import { Resolver, Query } from '@nestjs/graphql';

import { PartnerType, PartnerRevenueType } from '@partners/common/partner.type';
import { PartnerService } from '@partners/providers/partner.service';


@Resolver(() => PartnerService)
export class PartnerResolver {

  constructor(private partnerService: PartnerService) {}

  @Query(returns => [PartnerType])
  async partners() {
    return this.partnerService.getAllPartners();
  }

  @Query(returns => [PartnerRevenueType])
  async partnerRevenue() {
    return [];
  }

}

