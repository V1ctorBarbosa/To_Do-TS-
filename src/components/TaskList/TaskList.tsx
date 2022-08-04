import React from 'react'
import {ITask} from "../../interfaces/Task"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id}>
                    <div>
                        {task.title}
                    </div>
                    <div>
                        <div>
                            <EditRoundedIcon />
                        </div>
                        <div onClick={() => {handleDelete(task.id)}}>
                            <DeleteRoundedIcon />
                        </div>
                    </div>
                </div>
            ))
            ) : (<p>There's no tasks to do</p>)
        }
    </>      
  )
}

export default TaskList