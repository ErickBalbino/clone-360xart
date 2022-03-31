import React, { useState } from 'react'
import '../css/Input.css'

export default function Input({ text, type, name, id }) {

  const[stateText, setStateText] = useState('unclick')

  return (
    <label htmlFor={id}>
      <p className='p' 
         style={ stateText === 'click' ? {fontSize: '0.6rem'} : {fontSize: '0.9rem'}}
      >
        {text}
      </p>

      <input type={type} name={name} id={id} onFocus={() => {setStateText('click')}} />
    </label>
  )
}
