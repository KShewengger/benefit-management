import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';

import { Partner } from '@partners/common/partner.entity';


@Entity()
export class Voucher extends BaseEntity {

  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  amount: number;

  @ManyToOne(type => Partner, partner => partner.voucher, { eager: true })
  @JoinColumn({ name: 'partnerId' })
  partner: Partner;

  @Column()
  partnerId: number;

}

