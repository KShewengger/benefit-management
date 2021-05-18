import { ObjectType, Field, ID } from '@nestjs/graphql';

import { EmployeeType } from '@employees/models/employee.type';
import { VoucherType } from '@vouchers/models/voucher.type';


@ObjectType('Order')
export class OrderType {

  @Field(type => ID)
  id: number;

  @Field()
  orderDate: Date;

  @Field(type => EmployeeType)
  employee: EmployeeType

  @Field(type => VoucherType)
  voucher: VoucherType

}
