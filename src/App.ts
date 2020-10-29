import express, { Express } from 'express'
import { TodoController } from './controllers/TodoController'
import { IApp } from './IApp'
import { TodoRepository } from './repositories/TodoRepositoryInMemory'
import { TodoRouter } from './routes/TodoRouter'
import { TodoService } from './services/TodoService'

export class App implements IApp {
    private appInstance: Express
    constructor() {
        this.appInstance = express()
        this.setupConfig()
        this.injectClasses()
    }

    public getAppInstance(): Express {
        return this.appInstance
    }

    private injectClasses(): void {
        const todoRepository = new TodoRepository()
        const todoService = new TodoService(todoRepository)
        const todoController = new TodoController(todoService)
        const todoRouter = new TodoRouter(todoController)
        this.appInstance.use('/api/v1/todo', todoRouter.getRoutes())
    }

    private setupConfig(): void {
        this.appInstance.use(express.json())
    }
}