import { Todo } from "../models/Todo";
import { ITodoRepository } from "../repositories/ITodoRepository";
import { ITodoService } from "./ITodoService";

export class TodoService implements ITodoService {
    constructor(private todoRepository: ITodoRepository) {}

    getAll(): Todo[] {
        return this.todoRepository.getAll()
    }

    getOne(id: number): Todo {
        return this.todoRepository.getOne(id)
    }

    save(todo: Todo): void {
        this.todoRepository.save(todo)
    }
}