import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import tasks from './tasks.json';

function App() {


  return (

        <Router>
          <Routes>
            <Route path="/" element = {<TaskList tasks={tasks} />}/>
            <Route path="/task/:id" element ={<TaskDetail tasks={tasks} />}/>
            
          </Routes>
        </Router>
  )
}

export default App;
