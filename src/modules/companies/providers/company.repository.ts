import { EntityRepository, Repository } from 'typeorm';

import { Company } from '@companies/common/company.entity';


@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {

}
