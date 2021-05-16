import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';
import { PartnerRevenueResponse } from '@partners/common/partner.model';


@Injectable()
export class PartnerService {

  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>
  ) {}

  async getPartnerRevenue(id: number): Promise<PartnerRevenueResponse[]> {
    return [];
  }

}
