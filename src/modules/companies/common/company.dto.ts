import { IsOptional, IsInt, IsDate } from 'class-validator';


export class GetCompanyEmployeesFilterDto {

  @IsOptional()
  @IsInt()
  maxBenefit: number;

  @IsOptional()
  @IsDate()
  date: Date;

}
