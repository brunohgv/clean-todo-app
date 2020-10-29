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

    update(id: number, todo: Todo): Todo {
        const savedTodo = this.todos.find(todo => todo.id === id)
        if(!savedTodo) {
            throw new Error('There is no Todo with the corresponding ID')
        }
        this.todos.map(savedTodo => {
            if(savedTodo.id === id) {
                if(todo.description) {
                    savedTodo.description = todo.description
                }
                if(todo.isCompleted) {
                    savedTodo.isCompleted = todo.isCompleted
                }
            }
            return savedTodo
        })
        return savedTodo
    }
    
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}
