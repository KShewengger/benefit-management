import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { PartnerService } from '@shared/partner/partner.service';
import { Partner } from '@partners/common/partner.entity';


@Controller('partners')
export class PartnersController {

  private logger = new Logger('PartnersController');

  constructor(private PartnerService: PartnerService) {}

  @Get()
  async getAllPartners(): Promise<Partner[]> {
    return this.PartnerService.getAllPartners();
  }

}
