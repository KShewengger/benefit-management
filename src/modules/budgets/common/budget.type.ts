import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { EmployeeType } from '@employees/common/employee.type';


@ObjectType('Budget')
export class BudgetType {

  @Field(type => ID)
  id: number;

  @Field(type => [EmployeeType])
  employee: EmployeeType

  @Field(type => Int)
  monthly_budget: number;

}
