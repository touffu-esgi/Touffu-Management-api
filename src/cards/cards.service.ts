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

  findAll(projectId: string) {
    return this.cards.findBy({
      projetId: projectId
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
