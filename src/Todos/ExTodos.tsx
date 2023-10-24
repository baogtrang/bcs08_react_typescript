import React, { useState } from 'react'
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'

export default function ExTodos() {
  // todo is object
  // todos is an array of todo
  // liên quan đến object thì tạo interface
  let [todos, setTodos] = useState([]);

  return (
    <div className='container'>
        <FormTodo />
        <ListTodo />
    </div>
  )
}
