// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"

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
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
    // console.log(data);
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{ //This return added task from server
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
    await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'})
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = id => {
    setTasks(tasks.map( task => 
      task.id === id ? { ...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={addTask} />
        { tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p className='notfound'>🤘</p>}
      </div>
    </div>
  );
}

export default App;
