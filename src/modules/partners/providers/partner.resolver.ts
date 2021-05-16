import { Resolver, Query } from '@nestjs/graphql';

import { PartnerType } from '@partners/common/partner.type';
import { PartnerService } from '@partners/providers/partner.service';


@Resolver(() => PartnerType)
export class PartnerResolver {

  constructor(private partnerService: PartnerService) {}

  @Query(() => [ PartnerType ])
  async partners() {
    return this.partnerService.getAllPartners();
  }

}

