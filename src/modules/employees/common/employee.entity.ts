import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Company } from '@companies/common/company.entity';


@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Company, company => company.employees, { eager: false })
  company: Company;

}

