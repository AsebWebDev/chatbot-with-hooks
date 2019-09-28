import React, { useState, useEffect } from 'react'
import DataPresentation from './DataPresentation'
import chatsupport from '../media/chatbot.png'

function InfoBox (props) {
    let [backendData, setBackendData] = useState(props.backendData)

    useEffect(() => {
        setBackendData(props.backendData)
    }, [props.backendData])

    return (backendData) 
    ?  (
        <div>
            <h1>Your Orders</h1>
            <DataPresentation data={backendData.data} />
        </div>
    )
    : (
        <div>
            <img src={chatsupport} width="500" alt="chatsupport"/>
        </div>
    )
}

export default InfoBox