// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   
  // Global state tasks = state/Array name || setTasks = trigger func(method) || useState = hook  =======================================================
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log(tasksFromServer);
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://ay-todo-server.netlify.app/api/tasks')
    const data = await res.json()
    return data
    // console.log(data);
  }

  //Fetch singlular Task
  const fetchTask = async (id) => {
    const res = await fetch(`https://ay-todo-server.netlify.app/api/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('https://ay-todo-server.netlify.app/api/tasks',{ //This return added task from server
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`https://ay-todo-server.netlify.app/api/tasks/${id}`,{method: 'DELETE'})
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`https://ay-todo-server.netlify.app/api/tasks/${id}`, { //This return added task from server
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json()
    setTasks(tasks.map( task => 
      task.id === id ? { ...task, reminder: data.reminder} : task
    ))
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path='/' element={
              <>
                <Header onAdd={addTask} />
                { tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p className='notfound'>🤘</p>}
                <Footer />
              </>
            }>
            </Route>
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
