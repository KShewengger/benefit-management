import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';


@Entity()
export class Budget extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monthly_budget: number;

  @OneToOne(type => Employee, employee => employee.budget, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employees: Employee[];

  @Column()
  employeeId: number;

}

