interface VoucherCommon {
  readonly id: number;
  amount: number;
}

export interface Voucher extends VoucherCommon {
  partnerId: number;
}

export interface VoucherTransaction extends VoucherCommon {
  quantitySold: number;
  totalRevenue: number;
}
