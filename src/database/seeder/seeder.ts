import { Injectable, Logger } from '@nestjs/common';

import { CompanySeederService } from '@seeder/company/company.service';
import { EmployeeSeederService } from '@seeder/employee/employee.service';
import { PartnerSeederService } from '@seeder/partner/partner.service';
import { VoucherSeederService } from '@seeder/voucher/voucher.service';


@Injectable()
export class Seeder {
  constructor(
    private logger: Logger,
    private companySeederService: CompanySeederService,
    private employeeSeederService: EmployeeSeederService,
    private partnerSeederService: PartnerSeederService,
    private voucherSeederService: VoucherSeederService
  ) {}

  async seed() {
    await Promise
      .all([
        this.companies,
        this.employees,
        this.partners,
        this.vouchers
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

  get companies(): Promise<boolean> {
    return this.seeder('companies', this.companySeederService);
  }

  get employees(): Promise<boolean> {
    return this.seeder('employees', this.employeeSeederService);
  }

  get partners(): Promise<boolean> {
    return this.seeder('partners', this.partnerSeederService);
  }

  get vouchers(): Promise<boolean> {
    return this.seeder('vouchers', this.voucherSeederService);
  }

}
