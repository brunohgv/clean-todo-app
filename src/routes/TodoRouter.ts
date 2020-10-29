import { Router } from 'express'
import { ITodoController } from '../controllers/ITodoController'
import { IRouter } from './IRouter'

export class TodoRouter implements IRouter {
    private routes = Router()
    
    constructor(private todoController: ITodoController) {
        this.routes.get('/', (req, res) => this.todoController.getAll(req, res))
        this.routes.get('/:id', (req, res) => this.todoController.getOne(req, res))
        this.routes.post('/', (req, res) => this.todoController.save(req, res))
    }

    getRoutes() {
        return this.routes
    }
}