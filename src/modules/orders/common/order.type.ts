import { ObjectType, Field, ID } from '@nestjs/graphql';

import { EmployeeType } from '@employees/common/employee.type';
import { VoucherType } from '@vouchers/common/voucher.type';


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
