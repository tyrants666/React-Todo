
const Tasks = (props) => {
    return (
        <>  
            {props.tasks.map (task => ( <h4 key={task.id}>{task.title}</h4> ) 
            )}
        </>
    )
}
export default Tasks
