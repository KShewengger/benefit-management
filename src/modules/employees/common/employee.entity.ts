import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

import { Company } from '@companies/common/company.entity';
import { Order } from '@orders/common/order.entity';


@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  name: string;

  @Column()
  monthlyBudget: number;

  @ManyToOne(() => Company, company => company.employees, { eager: false })
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @Column()
  companyId: number;

  @ManyToMany(() => Order, order => order.employee, { eager: true })
  @JoinTable()
  orders: Order[];

  orderId: number;

}
