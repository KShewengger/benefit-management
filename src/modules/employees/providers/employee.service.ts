import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';
import { GetEmployeesExpendituresFilterDto } from '@employees/common/employee.dto';
import { EmployeeExpenditureResponse } from '@employees/common/employee.model';


@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}

  async getEmployeesExpenditures(
    id: number,
    filterDto: GetEmployeesExpendituresFilterDto
  ): Promise<EmployeeExpenditureResponse[]> {
    return [];
  }

}
