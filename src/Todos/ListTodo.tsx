import React from 'react'
import { I_PropListTodo } from './interface'
import ItemTodo from './ItemTodo'

export default function ListTodo(
  {todos}: I_PropListTodo) {
  return (
    console.log("todos:", todos),
    <div className='table'>      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return <ItemTodo key={index} todo={todo} />
          })}
        </tbody>
      </table>
    </div>
  )
}
