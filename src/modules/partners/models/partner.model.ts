import { VoucherTransaction } from '@vouchers/models/voucher.model';


export interface Partner {
  readonly id: number;
  name: string;
}

export interface PartnerRevenue extends Partner {
  voucherTransactions: VoucherTransaction[];
  totalRevenue: number;
}
