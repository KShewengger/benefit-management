import { EntityRepository, Repository } from 'typeorm';

import { Voucher } from '@vouchers/common/voucher.entity';


@EntityRepository(Voucher)
export class VoucherRepository extends Repository<Voucher> {

}
