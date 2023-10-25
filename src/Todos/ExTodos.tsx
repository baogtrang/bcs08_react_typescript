import React, { useState } from 'react'
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'
import { I_Todo } from './interface';

export default function ExTodos() {
  // todo is object
  // todos is an array of todo objects
  // liên quan đến object thì tạo interface

  // <I_Todo[]> describes an array of todo object of type I_Todo
  let [todos, setTodos] = useState <I_Todo[]> ([
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

  let handleDelete = (id: number)=> {
    //filters out the specified id
    setTodos(todos.filter(
      todo => todo.id !== id))
  }

  let handleCreate=(newTodo:I_Todo) => {
    console.log("newTodo:", newTodo)
    
  }

  return (
    <div className='container'>
        <FormTodo />
        <ListTodo 
          handleDelete={handleDelete}
          todos= {todos} 
        />
    </div>
  )
}
