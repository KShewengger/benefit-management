import { EntityRepository, Repository } from 'typeorm';

import { Voucher } from '@vouchers/models/voucher.entity';


@EntityRepository(Voucher)
export class VoucherRepository extends Repository<Voucher> {

}
