import React from "react";
import "./makeaccount.css";
import { Button, Form } from "react-bootstrap";
import avatar from "./avatar.png";

function Makeaccount(): JSX.Element {
    return (
        <div className="App">
            <div className="profile">
                <img className="img" src={avatar}></img>
            </div>
            <div className="forms">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Name"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Qualities"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Age"
                    />
                </Form.Group>
            </div>
            <Button className="button">UPDATE</Button>
        </div>
    );
}

export default Makeaccount;
