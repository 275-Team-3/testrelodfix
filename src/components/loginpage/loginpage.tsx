import React from "react";
import { Button, Form } from "react-bootstrap";
import ronaldo from "./ronaldo.webp";

function Login(): JSX.Element {
    return (
        <div className="login">
            <img src={ronaldo} />
            <div>
                <div className="header">Welcome to Ekin</div>
                <div>Sign in</div>
                <div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email or Username"
                        />
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button>LOGIN NOW</Button>
                    <div>Forgot your password?</div>
                    <Button>Sign in with Google</Button>
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
