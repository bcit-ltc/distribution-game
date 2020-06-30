import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';
import Storefront from '../components/Storefront';
import Supplier from '../components/Supplier';

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
                        {/* <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button> */}
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace " variant="success">
                            Day <Badge variant="light">{this.state.days}</Badge>
                        </Button>
                        {/* <Button style={{ fontSize: '15px', width: '50%' }} variant="primary mt-2" onClick={() => this.setState({ days: this.state.days + 1 })}>
                            Process
                            </Button> */}
                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-5 mt-4 d-flex flex-column justify-content-top align-items-center">
                        <Form className="col-12 d-flex align-items-start ">
                            {/* <ShopWindow className="mr-3" color="#FFC108" size={100} /> */}
                            <div className="ml-3 mt-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>Supplier</u></h4>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-3">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                                <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" onClick={() => this.setState({days: 0})} variant="outline-light">Reset</Button>
                                <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                                <Form.Group className="mt-1">
                                    <Button style={{ fontSize: '15px' }} variant="primary mt-3" onClick={() => this.setState({ days: this.state.days + 1 })}>
                                        Process
                                    </Button>
                                </Form.Group>
                            </div>

                        </Form>
                    </Col>
                    <Col style={{ overflowY: 'scroll' }} className="col-7 mt-3 border-2 border-left border-light">
                        <h4 className="mt-4 text-start" style={{ color: '#FFC108' }}><u>Storefronts</u></h4>
                        <div className="col-12 mt-3 d-flex flex-row">
                            <Storefront
                                name={'Vancouver'}
                                inStock={'32'}
                                sold={'12'}
                            />
                            <Storefront
                                name={'Burnaby'}
                                inStock={'12'}
                                sold={'42'}
                            />
                            <Storefront
                                name={'Richmond'}
                                inStock={'92'}
                                sold={'12'}
                            />
                        </div>

                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-12 mt-3 d-flex flex-column  justify-content-start">
                            <Supplier name="Vancouver"/>
                            <Supplier name="Burnaby"/>
                            <Supplier name="Richmond"/>
                        </Form>
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;