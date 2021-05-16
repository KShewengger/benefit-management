import { IsOptional, IsInt, IsDate } from 'class-validator';


export class GetEmployeesExpendituresFilterDto {

  @IsOptional()
  @IsInt()
  company_id: number;

  @IsOptional()
  @IsDate()
  date: Date;

}
