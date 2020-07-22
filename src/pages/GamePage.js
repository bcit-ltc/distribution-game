import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, Spinner, Accordion, Card, Form, Dropdown, Table } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';
import Storefront from '../components/Storefront';
import Supplier from '../components/Supplier';
import AnimatedNumerical from '../components/AnimatedNumerical';
import Scorecard from '../components/ScoreCard';
import Sidebar from "react-sidebar";
class GamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            processing: false,
            supplierData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            showScorecard: false,
            showSideBar: false,
            centralWarehouse: false,
            inStock: [],
            inTransit: [],
            newOrder: 0,
            gameData: {
                'storeFronts': [
                    { name: 'Vancouver', order: 0, inStock: 45, sold: 0 },
                    { name: 'Burnaby', order: 0, inStock: 45, sold: 0 },
                    { name: 'Richmond', order: 0, inStock: 45, sold: 0 }],
                'supplier':
                    { 'inStock': [23, 50], order: 0, 'inTransit': [43, 90] }
            }
        }
    }

    updateOrder(e, index) {
        let data = this.state.gameData;

        data.storeFronts[index].order = e;

        this.setState({ gameData: data })
        console.log(this.state.gameData)
    }

    process() {

        //this.storeFront.current.update();

        let newData = this.state.supplierData;

        for (let x = 0; x < this.state.supplierData.length; x++) {

            if (x == 0) {
                console.log(this.state.supplierData[x - 1]);
                newData[x] = 13;
            } else {
                console.log(this.state.supplierData[x - 1]);
                newData[x] = this.state.supplierData[x - 1];
            }
        }

        this.setState({ days: this.state.days + 1, processing: true, data: newData });
        const timer = setTimeout(() => {
            this.setState({ processing: false })
        }, 2000);
        return () => clearTimeout(timer);

    }

    componentDidMount() {
        this.setState({ centralWarehouse: this.props.selectedModule === 'Direct Ship: Central Warehouse' })
        if (this.props.selectedModule === 'Direct Ship: Central Warehouse') {
            this.setState({
                supplierData: [0, 0, 0, 0, 0, 0]
                // inStock: [23, 50],
                // inTransit: [43, 90]
            })
        }
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
                        <h6 style={{ letterSpacing: 2 }}>{this.props.selectedModule}</h6>
                        <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2" onClick={() => this.setState({ days: 0 })} variant="outline-light">Reset</Button>
                        <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                        {/* <Button style={{ fontSize: '15px' }} className="text-monospace mt-2" variant="outline-light">Reset</Button>
                        <Button style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button> */}
                    </span>

                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace " variant="success">
                            Day <Badge variant="light">{<AnimatedNumerical to={this.state.days} from={this.state.days} />}</Badge>
                        </Button>

                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-5 mt-4 d-flex flex-column justify-content-top align-items-center">
                        <Form className="col-12 d-flex flex-column align-items-start ">
                            <div className="ml-3 mt-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>{!this.state.centralWarehouse ? 'Supplier' : 'Central Warehouse'}</u></h4>
                                {!this.state.centralWarehouse ? null : <Row className="col-12 d-flex justify-content-around">
                                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                                        <h2>{<AnimatedNumerical to={this.state.gameData.supplier.inStock[0]} from={this.state.gameData.supplier.inStock[1]} />}</h2>
                                        <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                                    </Form.Text>
                                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-info mt-3">
                                        <h2>{<AnimatedNumerical to={this.state.gameData.supplier.inTransit[0]} from={this.state.gameData.supplier.inTransit[1]} />}</h2>
                                        <sup style={{ letterSpacing: 1 }}>In Transit</sup>
                                    </Form.Text>
                                </Row>}
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-3">
                                    {!this.state.centralWarehouse ? 'Add the shipment quantity you want to be delivered to respective storefronts.' : ' Add the shipment quantity you want to be delivered to respective storefronts and warehouse.'}
                                </Form.Text>
                                {/* <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2" onClick={() => this.setState({ days: 0 })} variant="outline-light">Reset</Button>
                                <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button> */}
                                <Form.Group className="mt-1">
                                    <Button disabled={this.state.processing} style={{ fontSize: '15px' }} className="col-6" variant="primary mt-3" onClick={() => this.process()}>
                                        {this.state.processing ?
                                            <Spinner size="sm" animation="grow" role="status" />
                                            : 'Process'}
                                    </Button>

                                </Form.Group>

                                {/* <Button size="sm" onClick={() => this.setState({showScorecard: !this.state.showScorecard})} variant="outline-secondary">Scorecard</Button>
                                   <Scorecard //showScorecard={this.state.showScorecard}  
                //hideScorecard={() => this.setState({showScorecard: false})} 
                /> */}
                            </div>
                        </Form>
                    </Col>
                    <Col style={{ overflowY: 'scroll' }} className="col-7 mt-3 border-2 border-left border-light">

                        <h4 className="mt-4 text-start" style={{ color: '#FFC108' }}><u>Storefronts</u></h4>
                        <div className="col-12 mt-3 d-flex flex-row justify-content-between">
                            {this.state.gameData.storeFronts.map((i, index) =>
                                <Storefront
                                    name={i.name}
                                    data={data.Vancouver[this.state.days]}
                                />
                            )}
                        </div>

                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-12 mt-3 d-flex flex-column justify-content-start">
                            {this.state.centralWarehouse ?
                                <Accordion >
                                    <Card className="bg-dark ">
                                        <Card.Header className="border-white">
                                            <Accordion.Toggle className="text-white " as={Button} variant="link" eventKey="0">
                                                Warehouse Supplier
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse className="p-2 " eventKey="0">
                                            <Supplier data={['12', '32', '12', '09', '12', '32', '12', '09', '12', '32', '12', '09', '12', '32', '12', '09']} name={null} processing={this.state.processing} />
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion> : null}

                            {this.state.gameData.storeFronts.map((i, index) =>
                                <Supplier
                                    updateOrder={(i) => this.updateOrder(i, index)}
                                    data={this.state.supplierData}
                                    name={i.name} processing={this.state.processing} />)}
                        </Form>
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;