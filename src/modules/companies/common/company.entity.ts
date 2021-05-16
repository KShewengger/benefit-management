import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Company extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

}

