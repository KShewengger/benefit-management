import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}

