import { IsOptional, IsInt, IsDate } from 'class-validator';


export class GetCompanyEmployeesFilterDto {

  @IsOptional()
  @IsInt()
  max_benefit: number;

  @IsOptional()
  @IsDate()
  date: Date;

}
