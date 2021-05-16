import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { PartnerService } from '@partners/providers/partner.service';
import { Partner } from '@partners/common/partner.entity';
import { PartnerRevenueResponse } from '@partners/common/partner.model';


@Controller('companies')
export class PartnersController {

  private logger = new Logger('PartnersController');

  constructor(private PartnerService: PartnerService) {}

  @Get()
  async getAllPartners(): Promise<Partner[]> {
    return this.PartnerService.getAllPartners();
  }

  @Get('/:id/employees')
  async getPartnerEmployees(
    @Param('id', ParseIntPipe) id: number
  ): Promise<PartnerRevenueResponse[]> {
    return this.PartnerService.getPartnerRevenue(id);
  }

}
