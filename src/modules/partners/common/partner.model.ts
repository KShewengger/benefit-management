export interface PartnerModel {
  readonly id: number;
  name: string;
}

export interface PartnerRevenueResponse {
  partner_id: number;
  partner_name: string;
  voucher_quantity_sold: number;
  voucher_amount: number;
  total_revenue: number;
}
