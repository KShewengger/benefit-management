import { EntityRepository, Repository } from 'typeorm';

import { Company } from '@companies/models/company.entity';


@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {

}
