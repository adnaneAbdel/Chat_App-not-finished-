import React from "react";
import Message from "./Message";

const Messages = (props) => {

    const renderMessage = (message , index) => {
       
        message.outgoing = message.receiver !== props.user.id;
        return <Message key={index} message={message}/>
    
}  
    return (
        <div id="messages">
            {props.messages.map(renderMessage)}
        </div>
    )

  
}

export default Messages ; 