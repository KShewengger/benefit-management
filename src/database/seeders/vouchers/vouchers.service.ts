import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { SeedCreateService } from '@seeders/shared/seed-create/seed-create.service';

import { Voucher } from '@vouchers/common/voucher.entity';
import { VOUCHERS } from './vouchers.data';


@Injectable()
export class VoucherSeederService {

  constructor(
    @InjectRepository(Voucher)
    private readonly voucherRepository: Repository<Voucher>,
    private seedCreateService: SeedCreateService
  ) {}

  async create(): Promise<number> {
    return this.seedCreateService.create(VOUCHERS, this.voucherRepository);
  }

}
