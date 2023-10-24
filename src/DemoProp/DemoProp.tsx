// tsrfc
import React from 'react'
import Card from './Card'
import { I_Profile } from './interface'

// truyền 1 object từ component cha xuống component con
export default function DemoProp() {
  let profile : I_Profile = {
    id: 1,
    name: 'Nguyen Van A',
    address: 'Ha Noi',
  }
  return (
    <div>
      <h2>DemoProp</h2>
      <Card info={profile}/>
    </div>
  )
}