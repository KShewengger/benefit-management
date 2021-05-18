import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { EmployeeType } from '@employees/types/employee.type';


@ObjectType('Company')
export class CompanyType {

  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => [ EmployeeType ])
  employees: EmployeeType[]

  @Field(() => Int)
  total: number;

  @Field()
  date: Date;

}
