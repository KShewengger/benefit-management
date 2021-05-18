import { EntityRepository, Repository } from 'typeorm';

import { Partner } from '@partners/models/partner.entity';


@EntityRepository(Partner)
export class PartnerRepository extends Repository<Partner> {

}
