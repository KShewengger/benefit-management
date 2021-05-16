import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';
import { EmployeeModel } from '@employees/common/employee.model';

import { EMPLOYEES } from './employee.data';


@Injectable()
export class EmployeeSeederService {

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(): Array<Promise<EmployeeModel>> {
    return EMPLOYEES.map(async (company: EmployeeModel) => {
      return await this.employeeRepository
        .save(company)
        .catch(error => Promise.reject(error));
    });
  }

}
