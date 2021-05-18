import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { CompanyType } from '@companies/models/company.type';
import { OrderType } from '@orders/models/order.type';


@ObjectType('Employee')
export class EmployeeType {

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  monthlyBudget: number;

  @Field(type => CompanyType)
  company: CompanyType

  @Field(type => [ OrderType ])
  orders: OrderType[]

}
