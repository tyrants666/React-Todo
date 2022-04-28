// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
   
  // Global state || tasks = state/Array name || setTasks = trigger func || useState = hook  =======================================================
  const [tasks,setTasks] = useState([
      {
          id: 1,
          title: 'Food Shopping',
          day: 'Feb 20 2022',
          time: '10:00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          reminder: true
      },
      {
          id: 2,
          title: 'Pick Sanu',
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
          reminder: true
      },
      {
          id: 4,
          title: 'Lets Finish This',
          day: 'Nov 12 2022',
          time: '10:00',
          reminder: true
      }
  ]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className='task-wrapper container-left'>
        <Tasks tasks={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
