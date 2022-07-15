import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Project {
  @PrimaryColumn()
  id: string

  @Column()
  title: string

  @Column({default: '[]'})
  cards: string;
}
