import { VoucherTransaction } from '@vouchers/common/voucher.model';


export interface PartnerModel {
  readonly id: number;
  name: string;
}

export interface PartnerRevenue extends PartnerModel {
  voucherTransactions: VoucherTransaction[];
  totalRevenue: number;
}
