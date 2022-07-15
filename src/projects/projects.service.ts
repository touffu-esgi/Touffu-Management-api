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
    const project = {
      id: createProjectDto.id,
      title: createProjectDto.title,
      cards: JSON.stringify(createProjectDto.cards),
    };
    return this.projects.save(project);
  }

  async findAll() {
    const projects = await this.projects.find()
    projects.forEach(project => {
      project.cards = JSON.parse(project.cards);
    });
    return projects;
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
