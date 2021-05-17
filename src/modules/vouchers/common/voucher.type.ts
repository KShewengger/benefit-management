import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { PartnerType } from '@partners/common/partner.type';
import { OrderType } from '@orders/common/order.type';


@ObjectType('Voucher')
export class VoucherType {

  @Field(type => ID)
  id: number;

  @Field(type => Int)
  amount: number;

  @Field(type => PartnerType)
  partner: PartnerType

  @Field(type => [ OrderType ])
  orders: OrderType[]

  totalRevenue: number;

}
