import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

import { Employee } from '@employees/common/employee.entity';
import { Voucher } from '@vouchers/common/voucher.entity';


@Entity()
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: Date;

  @OneToOne(() => Employee, employee => employee.orders, { eager: false })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;

  @ManyToOne(() => Voucher, voucher => voucher, { eager: false })
  @JoinColumn({ name: 'voucherId' })
  voucher: Voucher;

  @Column()
  voucherId: number;

}
