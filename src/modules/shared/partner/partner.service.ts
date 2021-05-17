import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';
import { PartnerRevenue } from '@partners/common/partner.model';


@Injectable()
export class PartnerService {

  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>
  ) {}

  async getAllPartners(): Promise<Partner[]> {
    return this.partnerRepository.find();
  }

  async getPartner(id: number): Promise<Partner> {
    return this.partnerRepository.findOne({ id });
  }

  async getPartnerRevenue(partnerId: number): Promise<PartnerRevenue> {
    const { id, name, vouchers } = await this.partnerRepository.findOne({ id: partnerId });

    const voucherTransactions = vouchers
      .reduce((list, { id, amount, orders }) => {
        const totalRevenue = amount * orders.length;
        return [...list, { id, amount, quantitySold: orders.length, totalRevenue }];
      }, []);

    const totalRevenue = voucherTransactions.reduce((total, { totalRevenue }) => total + totalRevenue, 0);

    return { id, name, voucherTransactions, totalRevenue };
  }

}
