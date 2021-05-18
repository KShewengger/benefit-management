import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { SeedCreateService } from '@seeders/shared/seed-create/seed-create.service';

import { Partner } from '@partners/common/partner.entity';
import { PARTNERS } from './partners.data';


@Injectable()
export class PartnerSeederService {

  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
    private seedCreateService: SeedCreateService
  ) {}

  async create(): Promise<number> {
    return this.seedCreateService.create(PARTNERS, this.partnerRepository);
  }

}
