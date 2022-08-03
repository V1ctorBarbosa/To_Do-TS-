import React {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import { Form, Input, InputBnt, Label } from './TaskFormStyles'
import { ITask } from "../../interfaces/Task"
import { useEffect, useState } from 'react'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  
  return (
    <Form>
      <Label htmlFor='title'>Notes</Label>
      <Input type="text" name='title' placeholder='write here...' />
      <InputBnt type="submit" value={btnText} />
    </Form>
  )
}

export default TaskForm