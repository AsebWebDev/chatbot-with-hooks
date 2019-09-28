import React from 'react'

import botavatar from '../media/bot.gif'
import useravatar from '../media/user.png'

function Message (props) {
        return props.user 
        ? (<p className="align-right message-user"><img src={useravatar} alt="" width="50"/><b>User:</b> {props.text}</p>)
        : (<p className="align-left message-bot"><img src={botavatar} alt="" width="50"/><b>Botty:</b>{props.text}</p>)
}

export default Message
