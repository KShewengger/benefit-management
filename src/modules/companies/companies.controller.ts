import { Controller, Get, ValidationPipe, Query, Param, ParseIntPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { CompanyService } from '@companies/providers/company.service';
import { Company } from '@companies/common/company.entity';
import { GetCompanyEmployeesFilterDto } from '@companies/common/company.dto';
import { CompanyEmployeesResponse } from '@companies/common/company.model';


@Controller('companies')
export class CompaniesController {

  private logger = new Logger('CompaniesController');

  constructor(private companyService: CompanyService) {}

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    return this.companyService.getAllCompanies();
  }

  @Get('/:id/employees')
  async getCompanyEmployees(
    @Param('id', ParseIntPipe) id: number,
    @Query(ValidationPipe) filterDto: GetCompanyEmployeesFilterDto
  ): Promise<CompanyEmployeesResponse[]> {
    return this.companyService.getCompanyEmployees(id, filterDto);
  }

}
