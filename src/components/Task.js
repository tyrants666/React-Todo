import { MdDelete, MdNotifications, MdNotificationsNone } from "react-icons/md"


const Task = ({task, onDelete, onToggle}) => {

  // ======= Toggle classname for reminder ======= 
  // let toggle = task.reminder;
  // let classes;
  // toggle ? classes ='task task-reminder' : classes = 'task';

  return (
    <div className="task" onDoubleClick={() => onToggle(task.id) }>
      <h4><span>{task.title} </span>
        {task.reminder ? <MdNotifications className="icon-important" /> : <MdNotificationsNone className="icon-not-important" />}
        <MdDelete className="icon-delete" onClick={() => onDelete(task.id) } />
      </h4>
      <small>{task.day}</small>
    </div>
  )
}

export default Task