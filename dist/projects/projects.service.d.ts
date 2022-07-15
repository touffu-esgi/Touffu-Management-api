import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
export declare class ProjectsService {
    private projects;
    constructor(projects: Repository<Project>);
    create(createProjectDto: CreateProjectDto): Promise<{
        title: string;
        cards: string;
    } & Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): string;
    update(id: number, updateProjectDto: UpdateProjectDto): string;
    remove(id: number): string;
}
