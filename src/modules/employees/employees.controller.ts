import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { EmployeeService } from '@shared/employee/employee.service';
import { Employee } from '@employees/common/employee.entity';


@Controller('employees')
export class EmployeesController {

  private logger = new Logger('EmployeesController');

  constructor(private employeeService: EmployeeService) {}

  @Get()
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

}
