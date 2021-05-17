import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { VoucherType } from '@vouchers/common/voucher.type';


@ObjectType('Partner')
export class PartnerType {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => [ VoucherType ])
  vouchers: VoucherType[]

}

@ObjectType('PartnerRevenue')
export class PartnerRevenueType extends PartnerType {

  @Field(type => Int)
  voucherQuantitySold: number;

  @Field(type => Int)
  totalRevenue: number;

}
