import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

import { Company } from '@companies/common/company.entity';
import { Budget } from '@budgets/common/budget.entity';


@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Company, company => company.employees, { eager: false })
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @Column()
  companyId: number;

  @OneToOne(type => Budget, budget => budget.employees, { eager: false })
  @JoinColumn({ name: 'budgetId' })
  budget: Budget;

  @Column()
  budgetId: number;

}
