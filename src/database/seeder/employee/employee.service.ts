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

  async create(): Promise<number> {
    for (const employee of EMPLOYEES) {
      await this.employeeRepository
        .save(employee)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(EMPLOYEES.length);
  }

}
