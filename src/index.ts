import express from 'express'
import http from 'http'
import { TodoRepository } from './repositories/TodoRepository'
import { TodoService } from './services/TodoService'
import { TodoController } from './controllers/TodoController'
import { TodoRouter } from './routes/TodoRouter'

const app = express()
const httpServer = http.createServer(app)
const PORT = 3000

const todoRepository = new TodoRepository()
const todoService = new TodoService(todoRepository)
const todoController = new TodoController(todoService)
const todoRouter = new TodoRouter(todoController)

app.use(express.json())
app.use('/api/v1/todo', todoRouter.getRoutes())

httpServer.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})