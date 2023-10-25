import React from 'react'
import { I_PropTodo } from './interface'

export default function ItemTodo({todo}:I_PropTodo) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.isCompleted}</td>
    </tr>
  )
}
