import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';


@Entity()
export class Company extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(type => Employee, employee => employee.company, { eager: true })
  employees: Employee[]

}

