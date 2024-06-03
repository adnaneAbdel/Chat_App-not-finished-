import { Row } from "reactstrap";
import React from "react";
import Avater from "../Avater";


const ContactHeader = (props) => {
    return(<Row className="heading">
        <Avater/>
        <div>connections</div>

    </Row>)
}

export default ContactHeader ;