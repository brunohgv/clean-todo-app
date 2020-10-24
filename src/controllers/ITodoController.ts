import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export interface ITodoController {
    getAll(request: Request, response: Response): Response<Todo[]>
    getOne(request: Request, response: Response): Response<Todo>
    save(request: Request, response: Response): Response<void>
}