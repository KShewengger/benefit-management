import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Employee } from '@employees/models/employee.entity';
import { Voucher } from '@vouchers/models/voucher.entity';


@Entity()
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  orderDate: Date;

  @ManyToOne(() => Employee, employee => employee.orders, { eager: false })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;

  @ManyToOne(() => Voucher, voucher => voucher.orders, { eager: false })
  @JoinColumn({ name: 'voucherId' })
  voucher: Voucher;

  @Column()
  voucherId: number;

}
