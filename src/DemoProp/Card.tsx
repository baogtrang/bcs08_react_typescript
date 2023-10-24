import React from 'react'
import { I_CardProp } from './interface'

export default function Card (props : I_CardProp) {
  return (
    <div>
      {props.info.name}
    </div>
  )
}

