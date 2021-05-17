import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { Company } from '@companies/common/company.entity';
import { Order } from '@orders/common/order.entity';


@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn()
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

  @OneToMany(() => Order, order => order.employee, { eager: true })
  @JoinColumn({ name: 'orderId' })
  orders: Order[];

  orderId: number;

}
