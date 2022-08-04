import React from 'react'
import {ITask} from "../../interfaces/Task"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { Container, Title, Icon, EmptyText } from "./TaskListStyles"

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <Container key={task.id}>
                    <Title>
                        {task.title}
                    </Title>
                    <Icon onClick={() => {handleDelete(task.id)}}>  
                       <DeleteRoundedIcon />
                    </Icon>
                </Container>
            ))
            ) : (<EmptyText>nothing on the list...</EmptyText>)
        }
    </>      
  )
}

export default TaskList