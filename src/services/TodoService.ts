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

    update(id: number, todo: Todo): Todo {
        throw new Error("Method not implemented.");
    }
    
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}