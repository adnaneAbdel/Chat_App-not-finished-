import React from "react";
// import {withRouter} from "react-router-dom";
import Auth from 'Auth';
import Avater from "../Avater";
import { Row, DropdownItem, DropdownMenu,DropdownToggle,Nav,UncontrolledDropdown } from "reactstrap";

const ChatHeader = props => {
    const logout = () => {
        Auth.logout();
        props.history.push('/')
    };

    return (
        <Row className="heading m-0">
            <Avater src = {props.contact.Avater}/>
            <div className="text-right" >
                <div>{props.contact ? props.contact.name : ''}</div>
            </div>
        <Nav className="mr-auto" navbar >
            <UncontrolledDropdown>
                <DropdownToggle tag='a' className="nav-link">
                    <i className="fa fa-ellipsis-v" />

                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={logout} >login out</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
        </Row>
    )



}

export default ChatHeader;