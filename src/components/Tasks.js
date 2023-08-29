import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div className='task-wrapper container-left'>  
            {tasks.map (task => ( 
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> ) 
            )}
        </div>
    )
}
export default Tasks
