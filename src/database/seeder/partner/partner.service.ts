import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';

import { PARTNERS } from './partner.data';


@Injectable()
export class PartnerSeederService {

  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
  ) {}

  async create(): Promise<number> {
    for (const partner of PARTNERS) {
      await this.partnerRepository
        .save(partner)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(PARTNERS.length);
  }

}
