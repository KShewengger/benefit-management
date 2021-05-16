import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { PartnerService } from '@partners/providers/partner.service';
import { PartnerRevenueResponse } from '@partners/common/partner.model';


@Controller('companies')
export class PartnersController {

  private logger = new Logger('PartnersController');

  constructor(private PartnerService: PartnerService) {}

  @Get('/:id/revenue')
  async getPartnerEmployees(
    @Param('id', ParseIntPipe) id: number
  ): Promise<PartnerRevenueResponse[]> {
    return this.PartnerService.getPartnerRevenue(id);
  }

}
