// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
   
  // Global state || tasks = state/Array name || setTasks = trigger func(method) || useState = hook  =======================================================
  const [tasks,setTasks] = useState([
      {
          id: 1,
          title: 'Groceries',
          day: 'Feb 20 2022',
          time: '10:00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          reminder: true
      },
      {
          id: 2,
          title: 'Pick Sanu 🚙',
          day: 'March 24 2022',
          time: '10:00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          reminder: true
      },
      {
          id: 3,
          title: 'Birthday',
          day: 'Nov 12 2022',
          time: '10:00',
          reminder: false
      },
      {
          id: 4,
        title: 'Lets finish this',
          day: 'Nov 12 2022',
          time: '10:00',
          reminder: true
      }
  ]);

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
