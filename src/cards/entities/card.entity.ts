import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    projetId: string;

    @Column()
    cardStatus: string;
}
