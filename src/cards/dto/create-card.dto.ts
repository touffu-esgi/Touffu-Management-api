import { IsNotEmpty } from "class-validator";

export class CreateCardDto {
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    projetId: string;

    @IsNotEmpty()
    cardStatus: string;
}
