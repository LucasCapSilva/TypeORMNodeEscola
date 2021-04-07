import {getCustomRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { ModuloRepository } from '../repositories/ModuloRepository';


export class ModuloController {

    private moduloRepository = getCustomRepository(ModuloRepository);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.moduloRepository.find({ relations: ["aulas"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.moduloRepository.findOne(request.params.id,{ relations: ["aulas"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.moduloRepository.save(request.body);
    }
    async update(request: Request, response: Response, next: NextFunction) {
        return this.moduloRepository.update(request.body.id,request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.moduloRepository.findOne(request.params.id);
        await this.moduloRepository.remove(userToRemove);
    }

}