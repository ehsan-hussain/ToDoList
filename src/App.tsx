import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITask} from './Interfaces'




const App: FC = () => {

  const [task, setTask] = useState("")
  const [todoList, setTodoList] = useState<ITask[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement> ): void => {
    setTask(event.target.value);
  }

  const addTask = (): void => {
    const newTask = { taskName: task, id:todoList.length+1, completed: false}
    setTodoList([...todoList, newTask])
    setTask("")
    


  }
  
  const completeTask = (taskidtodelete: number):void => {
    setTodoList(todoList.filter((task) => {
      return task.id !=taskidtodelete
    }))

    
  }
  return (
    <div className="App"> 
    <div className='header'>
      <div className='inputContainer'>
      <input type="text" placeholder= "Task...." name='task' value={task} onChange={handleChange}/>
      </div>
      <button onClick={addTask}> Add task </button>
    </div>
    <div className='todolist'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask}  />;
      })}
    </div>
    
    </div>
  );
}

export default App;
