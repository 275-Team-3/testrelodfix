/* eslint-disable no-extra-parens */
import React from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./landingstyles.css";

import img1 from "./lp_images/1.jpg";
import img2 from "./lp_images/2.jpg";
import img3 from "./lp_images/3.jpg";
import img4 from "./lp_images/4.jpg";
import img5 from "./lp_images/5.jpg";
import img6 from "./lp_images/6.jpg";

function Landing(): JSX.Element {
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img1} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Dunk)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $10
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img2} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Skateboarder</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $20
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img3} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Tennis Ball</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img4} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Boxing Gloves</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $40
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img5} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Roadbike</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $50
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img6} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Pass)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $60
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img1} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Dunk)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $10
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img2} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Skateboarder</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $20
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img3} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Tennis Ball</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img4} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Boxing Gloves</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $40
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img5} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Roadbike</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $50
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img6} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Pass)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $60
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img1} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Dunk)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $10
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img2} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Skateboarder</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $20
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img3} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Tennis Ball</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img4} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Boxing Gloves</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $40
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img5} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Roadbike</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $50
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img6} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Basketball (Pass)</a>
                                    <span>New Arrivals</span>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $60
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Landing;
