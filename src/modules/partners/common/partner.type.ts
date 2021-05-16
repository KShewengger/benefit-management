import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('Partner')
export class PartnerType {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

}

@ObjectType('PartnerRevenue')
export class PartnerRevenueType {

  @Field(type => ID)
  partner_id: number;

  @Field()
  partner_name: string;

  @Field(type => Int)
  voucher_quantity_sold: number;

  @Field(type => Int)
  voucher_amount: number;

  @Field(type => Int)
  total_revenue: number;

}
