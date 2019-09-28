import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

function InputBox (props) {
    let [value, setValue] = useState('')
    let [inputBoxState] = useState(props)

    let handleSubmit = e => {
        e.preventDefault();
        inputBoxState.handleNewMessage(value)   
        setValue('')
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <Input placeholder='Talk to the Bot...' value={value} onChange={e => setValue(e.target.value)}  />
            </form>
        </div>
    )
}

export default InputBox