import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({
    todos,
    handleCompleteTodo,
    handleDeleteTodo,
    handleUpdateTodo
}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleUpdateTodo={handleUpdateTodo}
                    handleCompleteTodo={handleCompleteTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </ul>
    )
}
