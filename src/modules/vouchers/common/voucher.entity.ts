import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';
import { Order } from '@orders/common/order.entity';


@Entity()
export class Voucher extends BaseEntity {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  amount: number;

  @ManyToOne(type => Partner, partner => partner.vouchers, { eager: false })
  @JoinColumn({ name: 'partnerId' })
  partner: Partner;

  @Column()
  partnerId: number;

  @OneToMany(() => Order, order => order.voucher, { eager: true })
  @JoinColumn({ name: 'orderId' })
  orders: Order[];

  orderId: number;

}

