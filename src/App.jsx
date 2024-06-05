import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './commons/TodoList'

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
        </div>
        <TodoList />
      </div>

    </>
  )
}

export default App
