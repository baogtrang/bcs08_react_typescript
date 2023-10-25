import React, { useState } from 'react'
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'
import { I_Todo } from './interface';

export default function ExTodos() {
  // todo is object
  // todos is an array of todo
  // liên quan đến object thì tạo interface

  // <I_Todo[]> describes an array of todo object of type I_Todo
  let [todo, setTodos] = useState <I_Todo[]> ([
    {
      id: 1,
      title: 'Todo 1',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Todo 2',
      isCompleted: false
    },
  ]);

  return (
    <div className='container'>
        <FormTodo />
        <ListTodo todos= {todo} />
    </div>
  )
}
