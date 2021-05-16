import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('VoucherType')
export class VoucherType {

  @Field(type => ID)
  id: number;

  @Field(type => Int)
  amount: number;

}
