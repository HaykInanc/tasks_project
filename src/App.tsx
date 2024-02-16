import { useState } from "react";
import TaskItem from "./components/TaskItem/TaskItem";
import { Task } from "./types/Task";
import TaskManager from "./components/TaskManager/TaskManager";


export default function App() {
  const defaultList:Task[] = [
    {id: 1, title: "Задача # 1", price: 500, status: true},
    {id: 2, title: "Задача # 2", price: 600, status: true},
    {id: 3, title: "Задача # 3", price: 450, status: false},
    {id: 4, title: "Задача # 4", price: 650, status: true},
    {id: 5, title: "Задача # 5", price: 300, status: false}
  ];

  const [tasks, setTasks] = useState<Task[]>(defaultList);

  const changeStatus:Function = (change_id:number) => {
    const target:Task | undefined = tasks.find(({id}) => id === change_id);
    target && (target.status = !target.status);
    setTasks([...tasks]);
  }

  const removeTask:Function = (remove_id:number) => {
    const result:Task[]= tasks.filter(({id}) => id !== remove_id);
    setTasks(result);
  }

  const handler = {removeTask, changeStatus};

  return (
    <TaskManager tasks={tasks} handler={handler}/>
  )
}