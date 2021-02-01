import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        //If task reminder is true, then use class of reminder (Adds green border) or else nothing happens
        <div className={`task ${task.reminder ? 'reminder' : ''}`}  
        onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
   