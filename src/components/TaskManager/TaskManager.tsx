import React from 'react'
import { Task } from '../../types/Task'
import TaskItem from '../TaskItem/TaskItem'
import s from './style.module.css'

type Props = {
  tasks:Task[], 
  handler: {changeStatus:Function, removeTask: Function}
};

export default function TaskManager({tasks, handler}: Props) {
  
  return (
    <div className={s.container}>
      {
        tasks.map(task => <TaskItem key={task.id} {...task} {...handler} />)
      }
    </div>
  )
}