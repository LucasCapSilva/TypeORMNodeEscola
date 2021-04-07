import { Aula } from './../entity/Aula';
  
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Aula)
class AulaRepository extends Repository<Aula> { }

export { AulaRepository }