import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoreducer"

export const useTodo = () => {
    const initialState = []
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(
        todoReducer,
        initialState,
        init)

    const todosCount = todos.lenght
    const pendindgTodosCount = todos.filter(todo => !todo.done).lenght

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = todo => {
        const action = {
            type: "Add Todo",
            payload: todo,
        }
        dispatch(action)
    }
    const handleDeleteTodo = id => {
        const action = {
            type: "Delete Todo",
            payload: id,
        }
        dispatch(action)
    }
    const handleCompleteTodo = id => {
        const action = {
            type: "Complete Todo",
            payload: id,
        }
        dispatch(action)
    }
    const handleUpdateTodo = (id, description) => {
        const action = {
            type: "Update Todo",
            payload: {
                id,
                description
            }
        }
        dispatch(action)
    }
    return{
        todos,
        todosCount,
        pendindgTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }

}