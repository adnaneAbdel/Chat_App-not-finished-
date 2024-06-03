import React from 'react';
import {Row} from 'reactstrap'
import { ContactHeader } from '../components';
import Contacts from '../components/chat/Contacts';
import ChatHeader from '../components/chat/ChatHeader';
import Messages from '../components/chat/Messages';
const Chat = (props) =>{
  const renderChat = () =>{
    const {contact , user} = props ;
    if(!contact) return ;
    let messages = props.messages.filter(e => e.sender === contact.id || e.receiver === contact.id);
    return <Messages user = {user} messages={messages} />
  }
props = {
 
  messages: [
    {sender: "1", receiver: "2" , content: "hii how are you"},
    {sender: "1", receiver: "2" , content: "hii how are you"},
    {sender: "3", receiver: "1" , content: "hii how are you"},
    {sender: "1", receiver: "3" , content: "hii how are you"},
    {sender: "1", receiver: "2" , content: "hii how are you"},
    {sender: "3", receiver: "2" , content: "hii how are you"},
    {sender: "2", receiver: "1" , content: "hii how are you"},
  ],
  contacts: [
    {id: "2", name: "mounir"},
    {id: "1" , name: "adnane"},
    {id: "3", name: "nadia"}
  ],
  contact: {id: "1" , name:"adnane"},
}

    return(
        <Row className='h-100'>
          <div id='contacts-section' className='col-6 col-md-4'>
          <ContactHeader/>
          <Contacts contacts={props.contacts} messages={props.messages}/>
          </div>

          <div id='messages-section' className='col-6 col-md-8'>
          <ChatHeader contact={props.contact}/>
          {renderChat}
          </div>
        </Row>
    )

  
}


export default Chat ;
