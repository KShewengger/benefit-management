import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';


@Injectable()
export class PartnerService {

  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>
  ) {}

  async getAllPartners(): Promise<Partner[]> {
    return this.partnerRepository.find();
  }

}
