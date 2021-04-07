import { AulaController } from '../controller/AulaController';
import { ModuloController } from '../controller/ModuloController';


export const Routes = [{

//Rotas modulos
    method: "get",
    route: "/modulo",
    controller: ModuloController,
    action: "all"
}, {
    method: "get",
    route: "/modulo/:id",
    controller: ModuloController,
    action: "one"
}, {
    method: "post",
    route: "/modulo",
    controller: ModuloController,
    action: "save"
}, 
{
    method: "put",
    route: "/modulo",
    controller: ModuloController,
    action: "update"
},{
    method: "delete",
    route: "/modulo/:id",
    controller: ModuloController,
    action: "remove"
},

//Rotas aulas
{
    method: "get",
    route: "/aulas",
    controller: AulaController,
    action: "all"
}, {
    method: "get",
    route: "/aulas/:id",
    controller: AulaController,
    action: "one"
}, {
    method: "post",
    route: "/aulas",
    controller: AulaController,
    action: "save"
}, 
{
    method: "put",
    route: "/aulas",
    controller: AulaController,
    action: "update"
},{
    method: "delete",
    route: "/aulas/:id",
    controller: AulaController,
    action: "remove"
}];