import React, {useState} from 'react'
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';
import { ITask } from "./interfaces/Task"

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  return (
    <div className="App">  
      <Modal title="Editar tarefa" children={<TaskForm btnText='edtiar tarefa' taskList={taskList}/>} />
      <TaskForm 
        btnText='create'
        taskList={taskList}
        setTaskList={setTaskList}
      /> 
      <TaskList
        taskList={taskList}
        handleDelete={deleteTask}
      />
    </div>
  );
}

export default App;
