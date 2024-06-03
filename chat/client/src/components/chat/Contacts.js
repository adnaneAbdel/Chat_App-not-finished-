import React from "react";
import { Row } from "reactstrap";
import Contact from "./Contact";

const Contacts = (props) => {

    const renderContact = (contact, index) => {
        let messages = props.messages.filter(e => e.sender === contact.id || e.receiver === contact.id);
        let lestMessage = messages[messages.length - 1];
        return (

            <div className="w-100" key={index} >
                <Contact contact={contact} message={lestMessage} />
            </div>
        );
    }

    return (
        <div className="list">
            <Row id="contacts">
                {props.contacts.map((contact, index) => renderContact(contact, index))}
            </Row>
        </div>
    );
}



export default Contacts;