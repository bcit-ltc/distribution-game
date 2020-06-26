import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';

class GamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0
        }
    }
    componentDidMount() {

    }



    render() {

        return (
            <Container style={{ height: '100%', minHeight: '100vh' }} className=" bg-dark d-flex p-0 m-0 flex-column align-items-center justify-content-space-between col-12 h-100 text-white">

                <Row className="p-2 d-flex p-0 m-0 text-start col-12 text-white  justify-content-between align-items-center">
                    <span className="p-1">
                        <h5 className="text-info" style={{ letterSpacing: 3 }}>The Distribution Game</h5>
                        <h6>Direct Ship: No Central Warehouse</h6>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace" variant="success">
                            Day <Badge variant="light">{this.state.days}</Badge>
                        </Button>
                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-8 mt-4 d-flex flex-column justify-content-top align-items-center">

                        <Form className="col-12 d-flex align-items-center">
                            <ShopWindow className="mr-3" color="#FFC108" size={60} />
                            <div>
                                <h5 className="mt-1">Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                            </div>

                        </Form>
                    </Col>
                    <Col className="col-4 mt-2">


                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-9 mt-3">
                            <Form.Group className="mt-1">
                                <Form.Label style={{fontSize:'20px', letterSpacing:2}}>Vancouver</Form.Label>
                                <ProgressBar className="mb-2">
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
                                <Form.Control className="col-1" type="number" placeholder="0" />
                            </Form.Group>
                            <Form.Group className="mt-1">
                                <Form.Label style={{fontSize:'20px', letterSpacing:2}}>Burnaby</Form.Label>
                                <ProgressBar className="mb-2">
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
                                <Form.Control className="col-1" type="number" placeholder="0" />

                            </Form.Group>
                            <Form.Group className="mt-1" >
                                <Form.Label style={{fontSize:'20px', letterSpacing:2}}>Richmond</Form.Label><ProgressBar className="mb-2">
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
                                <Form.Control className="col-1" type="number" placeholder="0" />

                            </Form.Group>
                            <Button style={{ fontSize: '15px' }} variant="primary mt-2" onClick={() => this.setState({ days: this.state.days + 1 })}>
                                Process
                            </Button>
                        </Form>
                        <Col className="col-3">
                        <div>
                                <h5 className="mt-3">Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                            </div>
                            <div>
                                <h5 className="mt-3">Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                            </div>
                            <div>
                                <h5 className="mt-3">Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;