import { Modulo } from './../entity/Modulo';
  
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Modulo)
class ModuloRepository extends Repository<Modulo> { }

export { ModuloRepository }