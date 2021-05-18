import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { SeedCreateService } from '@seeders/shared/seed-create/seed-create.service';

import { Company } from '@companies/common/company.entity';
import { COMPANIES } from './companies.data';


@Injectable()
export class CompanySeederService {

  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    private seedCreateService: SeedCreateService
  ) {}

  async create(): Promise<number> {
    return this.seedCreateService.create(COMPANIES, this.companyRepository);
  }

}
