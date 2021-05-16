export interface PartnerModel {
  readonly id: number;
  name: string;
}

export interface PartnerRevenueResponse extends PartnerModel {
  voucherQuantitySold: number;
  voucherAmount: number;
  totalRevenue: number;
}
