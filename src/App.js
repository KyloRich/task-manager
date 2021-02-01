import { useState}  from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

 
 
const App= () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Walk to class',
        day: 'October 25th at 2:45PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Bootcamp Prep Meeting',
        day: 'October 25th at 4:45PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Java JDK Installs',
        day: 'October 25th at 6:45PM',
        reminder: false,
    },
])  

//Function to Add Task 
const addTask = ({ task }) => {
   console.log(task)
 }


//Function to Delete a Task 
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

//  Functiion to Toggle Reminder - double click to call this 
//  function and changes reminder from opposite (true, to false) 
const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task
    )
  )
}


  return (
    <div className="container">
      <Header />
      <AddTask onAdd= {addTask}/>


      {/* If you clear all tasks aka 0-tasks, you are rewarded */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : ('Congrats, you knocked out your TODO List - You are amazing!')}
    </div>

  )
}

export default App;
