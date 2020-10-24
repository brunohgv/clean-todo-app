import { Todo } from "../models/Todo";

export interface ITodoService {
    getAll(): Todo[]
    getOne(id: number): Todo
    save(todo: Todo): void
}