import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Voucher } from '@vouchers/common/voucher.entity';


@Entity()
export class Partner extends BaseEntity {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Voucher, voucher => voucher.partner, { eager: true })
  vouchers: Voucher[]

  voucherId: number;

}

