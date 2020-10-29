import { Todo } from "../models/Todo";
import { ITodoRepository } from "./ITodoRepository";

export class TodoRepository implements ITodoRepository {
    private actualId: number = 0
    private todos: Todo[] = []
    
    getAll(): Todo[] {
        return this.todos
    }
    
    getOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo) {
            return todo
        }
        throw new Error('The todo was not found')
    }
    
    save(todo: Todo): void {
        todo.id = this.actualId++
        this.todos.push(todo)
    }
}
