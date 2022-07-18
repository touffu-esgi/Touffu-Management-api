import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CardsService {

  constructor(
      @InjectRepository(Card) private cards: Repository<Card>
  ) {}

  create(createCardDto: CreateCardDto) {
    return this.cards.save(createCardDto);
  }

  findAllInProject(projectId: string) {
    return this.cards.findBy({
      projetId: projectId
    });
  }

  findOne(id: string) {
    return this.cards.findOneBy({
      id: id
    });
  }

  update(id: string, updateCardDto: UpdateCardDto) {
    return this.cards.save(updateCardDto);
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }

  findAll() {
    return this.cards.find();
  }
}
