import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Company } from '@companies/common/company.entity';
import { CompanyModel } from '@companies/common/company.model';

import { COMPANIES } from './company.data';


@Injectable()
export class CompanySeederService {

  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  create(): Array<Promise<CompanyModel>> {
    return COMPANIES.map(async (company: CompanyModel) => {
      return await this.companyRepository
        .save(company)
        .catch(error => Promise.reject(error));
    });
  }
}
