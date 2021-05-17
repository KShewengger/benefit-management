import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { PartnerType } from '@partners/common/partner.type';
import { OrderType } from '@orders/common/order.type';


@ObjectType()
export abstract class Voucher {

  @Field(type => ID)
  id: number;

  @Field(type => Int)
  amount: number;

}

@ObjectType('Voucher')
export class VoucherType extends Voucher {

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

@ObjectType('VoucherTransaction')
export class VoucherTransactionType extends Voucher {

  @Field(type => Int)
  quantitySold: number;

  @Field(type => Int)
  totalRevenue: number;

}
