import { IsOptional, IsInt, IsDate } from 'class-validator';


export class GetEmployeesExpendituresFilterDto {

  @IsOptional()
  @IsInt()
  companyId: number;

  @IsOptional()
  @IsDate()
  date: Date;

}
