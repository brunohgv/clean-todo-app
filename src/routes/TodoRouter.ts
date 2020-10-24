import { Router } from 'express'
import { ITodoController } from '../controllers/ITodoController'
import { IRouter } from './IRouter'

export class TodoRouter implements IRouter {
    private routes = Router()
    
    constructor(private todoController: ITodoController) {
        this.routes.get('/', this.todoController.getAll)
        this.routes.get('/:id', this.todoController.getOne)
        this.routes.post('/', this.todoController.save)
    }

    getRoutes() {
        return this.routes
    }
}