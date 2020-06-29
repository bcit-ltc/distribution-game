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

                <Row className=" sticky-top bg-dark p-2 d-flex p-0 m-0 text-start col-12 text-white justify-content-between align-items-center">
                    <span className="p-1">
                        <h5 className="text-info" style={{ letterSpacing: 3 }}>The Distribution Game</h5>
                        <h6>Direct Ship: No Central Warehouse</h6>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace " variant="success">
                            Day <Badge variant="light">{this.state.days}</Badge>
                        </Button>
                        <Button style={{ fontSize: '15px', width: '50%' }} variant="primary mt-2" onClick={() => this.setState({ days: this.state.days + 1 })}>
                            Process
                            </Button>
                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-6 mt-4 d-flex flex-column justify-content-top align-items-center">

                        <Form className="col-12 d-flex align-items-center">
                            <ShopWindow className="mr-3" color="#FFC108" size={100} />
                            <div className="ml-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>Supplier</u></h4>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                            </div>

                        </Form>
                    </Col>
                    <Col className="col-6 mt-3 border-2 border-left border-light">
                        <h4 className="mt-4 text-center" style={{ color: '#FFC108' }}><u>Storefronts</u></h4>
                        <div className="col-12 mt-1 d-flex flex-row">
                            <div className=" col-4 d-flex flex-column align-items-start">
                                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>Vancouver</h5>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                                    <h2>23</h2> <sup>In Stock</sup>
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3">
                                    <h2>93</h2> <sup>Sold</sup>
                                </Form.Text>
                            </div>
                            <div className=" col-4 d-flex flex-column align-items-start justify-content-around">
                                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>Burnaby</h5>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className=" text-success mt-3">
                                    <h2>23</h2>  <sup>In Stock</sup>
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3">
                                    <h2>93</h2> <sup>Sold</sup>
                                </Form.Text>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-start justify-content-around">
                                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>Richmond</h5>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                                    <h2>23</h2>  <sup>In Stock</sup>
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3 ">
                                    <h2>93</h2><sup>Sold</sup>
                                </Form.Text>
                            </div>
                        </div>

                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-12 mt-3 d-flex flex-column  justify-content-start">
                            <Form.Group className="mt-1">
                                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>Vancouver</Form.Label>
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
                                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>Burnaby</Form.Label>
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
                                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>Richmond</Form.Label><ProgressBar className="mb-2">
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
                            {/* <Button style={{ fontSize: '15px', width:'50%' }} variant="primary mt-2" onClick={() => this.setState({ days: this.state.days + 1 })}>
                                Process
                            </Button> */}
                        </Form>
                        {/* <Col className="col-3 d-flex flex-column justify-content-around">
                            <div>
                                <h5 >Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Stock
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Sold
                                </Form.Text>
                            </div>
                            <div>
                                <h5 >Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Stock
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Sold
                                </Form.Text>
                            </div>
                            <div>
                                <h5 >Supplier</h5>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Stock
                                </Form.Text>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-1">
                                    Sold
                                </Form.Text>
                            </div>
                        </Col> */}
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;