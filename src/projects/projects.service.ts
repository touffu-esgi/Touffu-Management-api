import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from "./entities/project.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project) private projects: Repository<Project>
  ) {}


  create(createProjectDto: CreateProjectDto) {
    return this.projects.save({
      title: createProjectDto.title,
      cards: createProjectDto.cards
    });
  }

  findAll() {
    return this.projects.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
