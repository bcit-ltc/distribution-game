import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, Spinner, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';
import Storefront from '../components/Storefront';
import Supplier from '../components/Supplier';
import AnimatedNumerical from '../components/AnimatedNumerical';

class GamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            processing: false,
            data: [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 9, 7]
        }
        this.storeFront = React.createRef();
    }

    process() {

        //this.storeFront.current.update();

        let newData = this.state.data;

        for (let x = 0; x < this.state.data.length; x++) {

            if (x == 0) {
                console.log(this.state.data[x - 1]);
                newData[x] = 13;
            } else {
                console.log(this.state.data[x - 1]);
                newData[x] = this.state.data[x - 1];
            }
        }

        this.setState({ days: this.state.days + 1, processing: true, data: newData });
        const timer = setTimeout(() => {
            this.setState({ processing: false })
        }, 2000);
        return () => clearTimeout(timer);

    }

    render() {


        let data = {
            "Vancouver": [{ "sold": 2, "stockReceived": 25 }, { "sold": 12, "stockReceived": 5 }, { "sold": 10, "stockReceived": 42 }, { "sold": 32, "stockReceived": 15 }, { "sold": 22, "stockReceived": 52 }, { "sold": 21, "stockReceived": 65 }, { "sold": 9, "stockReceived": 15 }, { "sold": 21, "stockReceived": 25 }, { "sold": 20, "stockReceived": 15 }, { "sold": 42, "stockReceived": 29 }],
            "Burnaby": [{ "sold": 2, "stockReceived": 25 }, { "sold": 12, "stockReceived": 5 }, { "sold": 10, "stockReceived": 42 }, { "sold": 32, "stockReceived": 15 }, { "sold": 22, "stockReceived": 52 }, { "sold": 21, "stockReceived": 65 }, { "sold": 9, "stockReceived": 15 }, { "sold": 21, "stockReceived": 25 }, { "sold": 20, "stockReceived": 15 }, { "sold": 42, "stockReceived": 29 }],
            "Richmond": [{ "sold": 2, "stockReceived": 25 }, { "sold": 12, "stockReceived": 5 }, { "sold": 10, "stockReceived": 42 }, { "sold": 32, "stockReceived": 15 }, { "sold": 22, "stockReceived": 52 }, { "sold": 21, "stockReceived": 65 }, { "sold": 9, "stockReceived": 15 }, { "sold": 21, "stockReceived": 25 }, { "sold": 20, "stockReceived": 15 }, { "sold": 42, "stockReceived": 29 }]
        }

        return (
            <Container style={{ height: '100%', minHeight: '100vh' }} className=" bg-dark d-flex p-0 m-0 flex-column align-items-center justify-content-space-between col-12 h-100 text-white">
                <Row className=" sticky-top bg-dark p-2 d-flex p-0 m-0 text-start col-12 text-white justify-content-between align-items-center">
                    <span className="p-1">
                        <h5 className="text-info" style={{ letterSpacing: 3 }}>The Distribution Game</h5>
                        <h6 style={{ letterSpacing: 2 }}>Direct Ship: No Central Warehouse</h6>
                        {/* <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button> */}
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace " variant="success">
                            Day <Badge variant="light">{<AnimatedNumerical to={this.state.days } from={this.state.days} />}</Badge>
                        </Button>
                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-5 mt-4 d-flex flex-column justify-content-top align-items-center">
                        <Form className="col-12 d-flex flex-column align-items-start ">

                            <div className="ml-3 mt-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>Supplier</u></h4>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-3">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                                <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" onClick={() => this.setState({ days: 0 })} variant="outline-light">Reset</Button>
                                <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                                <Form.Group className="mt-1">
                                    <Button disabled={this.state.processing} style={{ fontSize: '15px' }} className="col-6" variant="primary mt-3" onClick={() => this.process()}>
                                        {this.state.processing ?
                                            <Spinner size="sm" animation="grow" role="status" />
                                            : 'Process'}
                                    </Button>
                                </Form.Group>
                                <OverlayTrigger
                                    key={'placement'}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            <h2>Hello World!</h2>
                                        </Tooltip>
                                    }>
                                    <Button variant="outline-secondary">Scorecard</Button>
                                </OverlayTrigger>
                            </div>
                        </Form>
                    </Col>
                    <Col style={{ overflowY: 'scroll' }} className="col-7 mt-3 border-2 border-left border-light">
                        <h4 className="mt-4 text-start" style={{ color: '#FFC108' }}><u>Storefronts</u></h4>
                        <div className="col-12 mt-3 d-flex flex-row">
                            <Storefront
                                ref={this.storeFront}
                                name={'Vancouver'}
                                data={data.Vancouver[this.state.days]}
                            />
                            <Storefront
                                ref={this.storeFront}
                                name={'Burnaby'}
                                data={data.Burnaby[this.state.days]}
                            />
                            <Storefront
                                ref={this.storeFront}
                                name={'Richmond'}
                                data={data.Richmond[this.state.days]}
                            />
                        </div>

                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-12 mt-3 d-flex flex-column justify-content-start">
                            <Supplier data={this.state.data} name="Vancouver" processing={this.state.processing} />
                            <Supplier data={this.state.data} name="Burnaby" processing={this.state.processing} />
                            <Supplier data={this.state.data} name="Richmond" processing={this.state.processing} />
                        </Form>
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;