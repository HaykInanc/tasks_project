import { Task } from '../../types/Task'
import s from './style.module.css'

type Props = Task & {
  changeStatus:Function, 
  removeTask:Function
};

export default function TaskItem({id, title, price, status, changeStatus, removeTask}:Props) {
  return (
    <div className={s.item}>
      <p>Title: {title}</p>
      <p>Price: {price} $</p>
      <p>{status? "Сделано": "В процессе"}</p>
      <button onClick={() => changeStatus(id)}>Сменить статус</button>
      <button onClick={() => removeTask(id)}>Удалить</button>
    </div>
  )
}