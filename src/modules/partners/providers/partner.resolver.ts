import { Resolver, Query } from '@nestjs/graphql';

import { PartnerRevenueType } from '@partners/common/partner.type';
import { PartnerService } from '@partners/providers/partner.service';


@Resolver(() => PartnerRevenueType)
export class PartnerResolver {

  constructor(private partnerService: PartnerService) {}

  @Query(returns => [PartnerRevenueType])
  async partnerRevenue() {
    return [];
  }

}

