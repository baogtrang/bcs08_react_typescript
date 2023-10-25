import React from 'react'
import { I_PropTodo } from './interface'

export default function ItemTodo({todo,handleDelete }:I_PropTodo) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.isCompleted}/>
      </td>
      <td>
        <button onClick={()=>handleDelete(todo.id)} className='btn btn-warning'>
          Delete
        </button>
      </td>
    </tr>
  )
}
