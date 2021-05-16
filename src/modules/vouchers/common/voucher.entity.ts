import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Voucher extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

}

