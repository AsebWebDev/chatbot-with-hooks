import React, { useState, useEffect} from 'react';
import Message from './Message'

function Chat (props) {
    let [messages, setMessages] = useState(props.messages)
    if (messages.length > 6) {
        messages.shift()
        messages.shift()
    }

    useEffect(() => {
        setMessages(props.messages);
    }, [props.messages]);

    return (
        <div>
            <p>Welcome to our service chat!</p>
            {messages.map((message,i) => 
                <Message key={i} text={message.text} user={message.user} />
            )}
        </div>
    )
}

export default Chat
