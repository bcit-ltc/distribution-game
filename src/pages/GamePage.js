import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';

class GamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }



    render() {

        return (
            <Container fluid style={{ height: '100%', minHeight: '100vh' }} className=" bg-dark d-flex p-0 m-0 flex-column align-items-center justify-content-space-between col-12 h-100 text-white">

                <Row className="p-2 d-flex p-0 m-0 text-start col-12 text-white  justify-content-between align-items-center">
                    <span className="p-1">
                        <h4 className="text-info" style={{ letterSpacing: 3 }}>The Distribution Game</h4>
                        <h5>Direct Ship: No Central Warehouse</h5>
                        <Button className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace" variant="success">
                            Day <Badge variant="light">0</Badge>
                        </Button>
                    </span>

                </Row>
                <Container fluid style={{ height: '100%', minHeight: '90vh', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-3 mt-5 d-flex flex-column justify-content-top align-items-center">
                        <ShopWindow color="#FFC108" size={66} />
                        <h4 className="mt-3">Supplier</h4>
                        <Form className>
                        <Form.Text style={{fontSize:18}} className="text-muted">
                        Add the shipment quantity you want to be delivered to respective storefronts.
                        </Form.Text>
                            <Form.Group className="mt-4">
                                <Form.Label>Vancouver</Form.Label>
                                <Form.Control className="col-4" type="number" placeholder="0" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Burnaby</Form.Label>
                                <Form.Control className="col-4" type="number" placeholder="0" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Richmond</Form.Label>
                                <Form.Control className="col-4" type="number" placeholder="0" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col className="col-6 mt-5">
                        <ProgressBar>
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="dark" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="success" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                            <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                            <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                            <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />

                        </ProgressBar>

                    </Col>
                    <Col className="col-3">

                    </Col>

                </Container>
            </Container >
        )
    }
}

export default GamePage;