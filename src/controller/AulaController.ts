import {getCustomRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { AulaRepository } from '../repositories/AulaRepository';


export class AulaController {

    private aulaRepository = getCustomRepository(AulaRepository);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.aulaRepository.find({ relations: ["modulo"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.aulaRepository.findOne(request.params.id,{ relations: ["modulo"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.aulaRepository.save(request.body);
    }
    async update(request: Request, response: Response, next: NextFunction) {
        return this.aulaRepository.update(request.body.id,request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.aulaRepository.findOne(request.params.id);
        await this.aulaRepository.remove(userToRemove);
    }

}