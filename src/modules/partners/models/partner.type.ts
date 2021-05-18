import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { VoucherTransactionType, VoucherType } from '@vouchers/models/voucher.type';


@ObjectType()
abstract class Partner {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

}

@ObjectType('Partner')
export class PartnerType extends Partner {

  @Field(type => [ VoucherType ])
  vouchers: VoucherType[]

}

@ObjectType('PartnerRevenue')
export class PartnerRevenueType extends Partner {

  @Field(type => [ VoucherTransactionType ])
  voucherTransactions: VoucherTransactionType[];

  @Field(type => Int)
  totalRevenue: number;

}
