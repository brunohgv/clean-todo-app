import { Todo } from "../models/Todo";

export interface ITodoRepository {
    getAll(): Todo[]
    getOne(id: number): Todo
    save(todo: Todo): void
    update(id: number, todo: Partial<Todo>): Todo
    delete(id: number): void
}