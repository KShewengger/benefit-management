import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Partner extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}

