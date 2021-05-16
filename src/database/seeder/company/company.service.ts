import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Company } from '@companies/common/company.entity';

import { COMPANIES } from './company.data';


@Injectable()
export class CompanySeederService {

  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(): Promise<number> {
    for (const company of COMPANIES) {
      await this.companyRepository
        .save(company)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(COMPANIES.length);
  }

}
