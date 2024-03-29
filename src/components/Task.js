import { MdDelete, MdNotifications } from "react-icons/md"


const Task = ({task, onDelete, onToggle}) => {

  // ======= Toggle classname for reminder ======= 
  // let toggle = task.reminder;
  // let classes;
  // toggle ? classes ='task task-reminder' : classes = 'task';

  return (
    <div className="task" onDoubleClick={() => onToggle(task.id) }>
      <h4> {task.id}&nbsp;&nbsp;{task.title} 
        {task.reminder && <MdNotifications className="icon-important" />}
        <MdDelete className="icon-delete" onClick={() => onDelete(task.id) } />
      </h4>
      <small>{task.day}</small>
    </div>
  )
}

export default Task