import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { CompanyType } from '@companies/common/company.type';


@ObjectType('Employee')
export class EmployeeType {

  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field(type => [CompanyType])
  company: CompanyType

}

@ObjectType('EmployeeExpenditure')
export class EmployeeExpenditureType extends EmployeeType {

  // orders

  @Field(type => Int)
  total_spent: number;

  @Field(type => Int)
  net_salary: number;

  @Field(type => Int)
  tax: number;

}
