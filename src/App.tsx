import React, {useState} from 'react'
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { ITask } from "./interfaces/Task"
import { Global } from './AppStyles';

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
    <Global>  
        <TaskForm
        btnText='create'
        taskList={taskList}
        setTaskList={setTaskList}
        /> 
        <TaskList
        taskList={taskList}
        handleDelete={deleteTask}
        />
    </Global>
  );
}

export default App;
