import './App.css'
import { TodoList } from './commons/TodoList'
import { TodoAdd } from './commons/TodoAdd'
import { useTodo } from './hooks/useTodo'

function App() {
  const { 
    todos,
    todosCount,
    pendindgTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo()

  return (
    <>
      <div className="card-to-do">
        <h1>Tareas</h1>
        <div className="counter-todos">
          <h3>Nºde tareas:{todosCount}</h3>
          <h3>Pendientes:{pendindgTodosCount}</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>
        <TodoList />
      </div>

    </>
  )
}

export default App
