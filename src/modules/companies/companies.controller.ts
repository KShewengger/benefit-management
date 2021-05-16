import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { CompanyService } from '@shared/company/company.service';
import { Company } from '@companies/common/company.entity';


@Controller('companies')
export class CompaniesController {

  private logger = new Logger('CompaniesController');

  constructor(private companyService: CompanyService) {}

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    return this.companyService.getAllCompanies();
  }

}
