import React from 'react'
import { I_PropListTodo } from './interface'
import ItemTodo from './ItemTodo'

export default function ListTodo(
    {todos, handleDelete}: I_PropListTodo
  
  ) {
  return (
    console.log("todos:", todos),
    <div className='table'>      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return <ItemTodo key={index} todo={todo} 
              handleDelete={handleDelete} />
          })}
        </tbody>
      </table>
    </div>
  )
}
