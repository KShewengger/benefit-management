import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Voucher } from '@vouchers/common/voucher.entity';

import { VOUCHERS } from './voucher.data';


@Injectable()
export class VoucherSeederService {

  constructor(
    @InjectRepository(Voucher)
    private readonly partnerRepository: Repository<Voucher>,
  ) {}

  async create(): Promise<number> {
    for (const voucher of VOUCHERS) {
      await this.partnerRepository
        .save(voucher)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(VOUCHERS.length);
  }

}
