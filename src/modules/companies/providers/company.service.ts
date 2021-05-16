import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Company } from '@companies/common/company.entity';
import { GetCompanyEmployeesFilterDto } from '@companies/common/company.dto';
import { CompanyEmployeesResponse } from '@companies/common/company.model';


@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  async getCompanyEmployees(
    id: number,
    filterDto: GetCompanyEmployeesFilterDto
  ): Promise<CompanyEmployeesResponse[]> {
    return [];
  }

}
