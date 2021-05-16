import { EntityRepository, Repository } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {

}
