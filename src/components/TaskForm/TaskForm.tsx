import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Form, Input, InputBnt, Label } from './TaskFormStyles'
import { ITask } from "../../interfaces/Task"


interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title}
    
    setTaskList!([...taskList, newTask])
    setTitle("")

    console.log(taskList)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } 
  }
  
  return (
    <Form onSubmit={addTaskHandler}>
      <Label htmlFor='title'>Notes</Label>
      <Input 
        type="text"
        name='title'
        placeholder='write here...'
        onChange={handleChange}
        value={title}
        />
        
      <InputBnt 
        type="submit"
        value={btnText} />
    </Form>
  )
}

export default TaskForm