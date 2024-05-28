import React, { useContext, useState } from 'react';
import TaskShow from './TaskShow';
import TasksContext from '../context/tasks';


function TaskList({  }) {
  const {tasks} = useContext(TasksContext)

  return (
    <div className='task-list'>
      {tasks.map((task, index) => (
        <TaskShow key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
