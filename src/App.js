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
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id, ...task}
    // tasks.push(newTask);
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
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
