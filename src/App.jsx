import './App.css'
import { TodoList } from './commons/TodoList'
import { TodoAdd } from './commons/TodoAdd'

function App() {

  return (
    <>
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>Nºde tareas:</h3>
          <h3>Pendientes:</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd/>
        </div>
        <TodoList />
      </div>

    </>
  )
}

export default App
