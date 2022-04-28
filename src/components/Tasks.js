
const Tasks = (props) => {
    return (
        <>  
            {props.tasks.map (task => ( <h4 key={task.id}>{task.id}&nbsp;&nbsp;{task.title}</h4> ) 
            )}
        </>
    )
}
export default Tasks
