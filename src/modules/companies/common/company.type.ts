import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { EmployeeType } from '@employees/common/employee.type';


@ObjectType('Company')
export class CompanyType {

  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field(type => [EmployeeType])
  employee: EmployeeType

  @Field(type => Int)
  total: number;

  @Field()
  date: Date;

}
