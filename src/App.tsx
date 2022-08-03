import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import { ITask } from "./interfaces/Task"

function App() {
  return (
    <div className="App">  
      <TaskForm btnText='create' /> 
    </div>
  );
}

export default App;
