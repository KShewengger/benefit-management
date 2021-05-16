import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Company } from '@companies/common/company.entity';


@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  async getAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async getCompany(id: number): Promise<Company> {
    return this.companyRepository.findOne(id);
  }

}
