import { Injectable, Logger } from '@nestjs/common';

import { CompanySeederService } from '@seeder/company/company.service';


@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly companySeederService: CompanySeederService,
  ) {}

  async seed() {
    await this.companies()
      .then(completed => {
        this.logger.debug('Successfully completed seeding...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding...');
        Promise.reject(error);
      });
  }

  async companies() {
    return await Promise.all(this.companySeederService.create())
      .then(companies => {
        this.logger.debug(`No. of companies created: ${ companies.filter(company => company).length }`);

        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }

}
