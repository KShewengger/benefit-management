import { Injectable, Logger } from '@nestjs/common';

import { CompanySeederService } from '@seeder/company/company.service';
import { EmployeeSeederService } from '@seeder/employee/employee.service';
import { PartnerSeederService } from '@seeder/partner/partner.service';


@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly companySeederService: CompanySeederService,
    private readonly employeeSeederService: EmployeeSeederService,
    private readonly partnerSeederService: PartnerSeederService
  ) {}

  async seed() {
    await Promise
      .all([
        this.companies,
        this.employees,
        this.partners
      ])
      .then(completed => {
        this.logger.debug('Successfully completed seeding...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding...');
        Promise.reject(error);
      });
  }

  async seeder(name: string, service: { create(): Promise<number> }): Promise<boolean> {
    return service.create()
      .then(data => {
        this.logger.debug(`No. of ${name} created: ${ data }`);
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }

  get companies() {
    return this.seeder('companies', this.companySeederService);
  }

  get employees() {
    return this.seeder('employees', this.employeeSeederService);
  }

  get partners() {
    return this.seeder('partners', this.partnerSeederService);
  }

}
