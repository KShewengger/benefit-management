import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('PartnerType')
export class PartnerType {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  voucherId: number;

}

@ObjectType('PartnerRevenue')
export class PartnerRevenueType extends PartnerType {

  @Field(type => Int)
  voucherQuantitySold: number;

  @Field(type => Int)
  totalRevenue: number;

}
