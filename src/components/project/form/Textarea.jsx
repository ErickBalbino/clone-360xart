import React, { useState } from 'react'

import '../css/Textarea.css'

export default function Textarea({ text, name, id }) {

  const[stateText, setStateText] = useState('unclick')

  return (
    <label>
        <p 
          className='p'
          style={ stateText === 'click' ? {fontSize: '0.6rem'} : {fontSize: '0.9rem'}}
        >
            {text}
        </p>
        <textarea name={name} id={id} onClick={() => {setStateText('click')}} />
    </label>
  )
}
