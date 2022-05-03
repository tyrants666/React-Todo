import { MdDelete } from "react-icons/md"

const Task = ({task, onDelete}) => {
  return (
    <div className="task">
      <h4> {task.id}&nbsp;&nbsp;{task.title} 
        <MdDelete onClick={() => {
          onDelete(task.id)
        }} />
      </h4>
      <small>{task.day}</small>
    </div>
  )
}

export default Task