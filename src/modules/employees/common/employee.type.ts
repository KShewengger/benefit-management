import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('Employee')
export class EmployeeType {

  @Field(type => ID)
  id: number;

  @Field()
  title: string;

}

@ObjectType('EmployeeExpenditure')
export class EmployeeExpenditureType {

  @Field(type => ID)
  employee_id: number;

  @Field()
  employee_name: string;

  @Field(type => Int)
  total_spent: number;

  @Field(type => Int)
  net_salary: number;

  @Field(type => Int)
  tax: number;

}
