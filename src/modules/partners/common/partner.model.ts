export interface PartnerModel {
  readonly id: number;
  name: string;
}

export interface PartnerRevenueResponse extends PartnerModel {
  voucher_quantity_sold: number;
  voucher_amount: number;
  total_revenue: number;
}
