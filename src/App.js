import { useState}  from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'

 
 
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

//Function to Delete a Task 
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : ('Congrats, you knocked out your TODO List')}
    </div>

  )
}

export default App;
