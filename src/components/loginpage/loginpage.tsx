import React from "react";
import { Button, Form } from "react-bootstrap";
import Ronaldo from "./r7.jpg";
import "./loginpage.css";

function Login(): JSX.Element {
    return (
        <div className="login">
            <div className="login">
                <img src={Ronaldo} />
            </div>
            <div className="login-info">
                <h2 className="header">Welcome to Ekin</h2>
                <div className="forms">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Email or Username"
                        />
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div className="middle-buttons">
                    <div>
                        <Button className="button">LOGIN NOW</Button>
                    </div>
                    <h6>Forgot your password?</h6>
                    <div>
                        <Button>Sign in with Google</Button>
                    </div>
                </div>
                <div className="last-buttons">
                    <Button>Make account</Button>
                    <Button>Log in as Admin</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
