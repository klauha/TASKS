import { useReducer } from "react"
import { todoReducer } from "../todoreducer"

export const useTodo = ()=> {
    const initialstate =[]
    const [todos, dispatch]= useReducer(todoReducer, initialstate, init)
    const handleNewTodo= todo =>{
        const action ={
            type: "Add Todo",
            payload:todo,
        }
        dispatch (action)
    }
    const handleDeleteTodo = id => {
    const action ={
        type: "Delete Todo",
        payload:id,
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
            type: "Complete Todo",
            payload:{
                id,
                description
            } 
        }
        dispatch(action)
    }
    return {
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }

}