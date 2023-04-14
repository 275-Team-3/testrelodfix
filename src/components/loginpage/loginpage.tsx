import React from "react";
import { Button, Form } from "react-bootstrap";
import Ronaldo from "./ronaldo.webp";

function Login(): JSX.Element {
    return (
        <div className="">
            <div className="">
                <img src={Ronaldo} />
            </div>
            <div className="">
                <h2 className="">Welcome to Ekin</h2>
                <div className="">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className=""
                            type="email"
                            placeholder="Email or Username"
                        />
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div className="">
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
