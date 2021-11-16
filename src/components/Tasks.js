
const tasks = [
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
   } 
]

const Tasks = () => {
    return (
        <>
            {tasks.map (task => ( <h3>{task.title}</h3> ) 
            )}
        </>
    )
}

export default Tasks