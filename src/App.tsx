import React from "react";
import "./App.css";
import { Col, Row, Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript - Welcome
                            Project! - Shay Patel, Eric Tlaseca - Morales,
                            Joshua Taing, Arjun Manikyath, Stephen Wiafe, Thomas
                            Pelosi
                        </header>
                    </Col>
                    <Col>
                        <header className="App-">
                            UD CISC275 with React Hooks and TypeScript - Welcome
                            Project! - Shay Patel, Eric Tlaseca - Morales,
                            Joshua Taing, Arjun Manikyath, Stephen Wiafe, Thomas
                            Pelosi
                        </header>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
