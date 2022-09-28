import React from 'react'
import Task from './Task'
const Tasks = ({tasks}) => {
  return (
    <div>
      <Task task={tasks}/>
    </div>
  )
}

export default Tasks
