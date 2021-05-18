import { Field, Int, ObjectType } from '@nestjs/graphql';

import { EmployeeType } from './employee.type';


@ObjectType('EmployeeBenefitStatus')
export class EmployeeBenefitStatusType {

  @Field(type => EmployeeType)
  employee: EmployeeType;

  @Field(type => Int)
  remainingBenefit: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

}
