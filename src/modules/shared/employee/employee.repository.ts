import { EntityRepository, Repository } from 'typeorm';

import { Employee } from '@employees/models/employee.entity';


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {

}
