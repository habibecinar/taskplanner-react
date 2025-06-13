import { useState } from 'react'
import './App.css'
import TaskList from "./features/features/tasks/TaskList";
import TaskForm from './features/features/tasks/TaskForm'

function App() {

  return (
    <>
      <h1>Görev Planlayıcı</h1>
      <TaskList />
     <TaskForm/>
     
    </>
  )
}

export default App
