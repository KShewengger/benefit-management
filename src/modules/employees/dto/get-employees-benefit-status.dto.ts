import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsDate } from 'class-validator';


@ArgsType()
export class GetEmployeesBenefitStatusArgs {

  @Field(() => Int, { nullable: true })
  @IsInt()
  companyId: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  minBenefit: number;

  @Field({ nullable: true })
  @IsDate()
  startDate: Date;

  @Field({ nullable: true })
  @IsDate()
  endDate: Date;

}
