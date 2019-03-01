import React, { Component } from "react"

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Welcome extends Component {

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://italianrestauranttampa.com/wp-content/uploads/2019/01/Italian-Food.jpg"
                            alt="Yummy Delicious"
                            height="500"
                        />
                        <Carousel.Caption>
                            <h3>Yummy Delicous</h3>
                            <p>always super nutrious</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2018/08/fwf02938420394fi-624x351.jpg"
                            alt="First slide"
                            height="500"
                        />
                        <Carousel.Caption>
                            <h3>Super Nutricious</h3>
                            <p>always yummy delicious</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container fluid>
                    <Row style={{ paddingLeft: 100, paddingTop: 20 }}>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="150" variant="top" src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg" />
                                <Card.Body>
                                    <Card.Title>Italian</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="150" variant="top" src="http://goldensunchinesefoods.com/uploads/1/1/7/5/117539924/tikka-food-hd-wallpaper_orig.jpg" />
                                <Card.Body>
                                    <Card.Title>Get Grillin</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="150" variant="top" src="http://www.newchina2253.com/images/banner03.jpg" />
                                <Card.Body>
                                    <Card.Title>Asian Fusion</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Welcome