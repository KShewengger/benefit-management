import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('PartnerType')
export class PartnerType {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

}

@ObjectType('PartnerRevenue')
export class PartnerRevenueType extends PartnerType {

  @Field(type => Int)
  voucher_quantity_sold: number;

  @Field(type => Int)
  total_revenue: number;

}
