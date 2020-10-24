import { Request, Response } from "express";
import { Todo } from "../models/Todo";
import { ITodoService } from "../services/ITodoService";
import { ITodoController } from "./ITodoController";

export class TodoController implements ITodoController {
    constructor(private todoService: ITodoService) {}

    getAll(request: Request, response: Response): Response<Todo[]> {
        const todos = this.todoService.getAll()
        return response.status(200).json(todos)
    }

    getOne(request: Request, response: Response): Response<Todo> {
        const id = parseInt(request.params.id)
        const todo = this.todoService.getOne(id)
        return response.status(200).json(todo)
    }
    
    save(request: Request, response: Response): Response<void> {
        const { description } = request.body as {description: string}
        this.todoService.save({
            description,
            isCompleted: false
        })
        return response.status(201)
    }
}