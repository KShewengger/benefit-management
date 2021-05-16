import { ObjectType, Field, ID, Int } from '@nestjs/graphql';


@ObjectType('Company')
export class CompanyType {

  @Field(type => ID)
  id: number;

  @Field()
  title: string;

}

@ObjectType('CompanyEmployee')
export class CompanyEmployeeType {
  @Field(type => ID)
  employee_id: number;

  @Field()
  employee_name: string;

  @Field()
  company_name: string;

  @Field(type => Int)
  total: number;

  @Field()
  date: Date;
}
