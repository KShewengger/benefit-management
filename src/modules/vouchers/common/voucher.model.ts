export interface VoucherModel {
  readonly id: number;
  partnerId: number;
  amount: number;
}

export interface VoucherTransaction {
  id: number;
  amount: number;
  quantitySold: number;
  totalRevenue: number;
}
