import React from "react";
import Avater from "../Avater";
import moment from 'moment'


const Contact = (props) => {
   return ( <div className="contact">
        <div>
            <Avater src = {props.contact.avatar}/>
        </div>
        <div className="w-50">
        <div className="name">{props.contact.name}</div>
        <div className="small last-message">
            {props.message ? props.message.contact : 'click here to start chat'}
        </div>
        </div>
        <div className="flex-grow-1 text-left">
            <div className="small text-muted">
                {props.message ? moment(props.message.date).format("hh:mm a") : ""}
            </div>
        </div>


    </div>)
}

export default Contact ;