import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, Spinner, Accordion, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
            storefrontData: [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 9, 7],
            showScorecard: false,
            showSideBar: false,
            centralWarehouse: false
        }
    }

    process() {

        //this.storeFront.current.update();

        let newData = this.state.storefrontData;

        for (let x = 0; x < this.state.storefrontData.length; x++) {

            if (x == 0) {
                console.log(this.state.storefrontData[x - 1]);
                newData[x] = 13;
            } else {
                console.log(this.state.storefrontData[x - 1]);
                newData[x] = this.state.storefrontData[x - 1];
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
            this.setState({ storefrontData: [3, 5, 89, 23, 32, 12] })
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
                                        <h2>{<AnimatedNumerical to={21} from={90} />}</h2>  <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                                    </Form.Text>
                                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-info mt-3">
                                        <h2>{<AnimatedNumerical to={101} from={90} />}</h2>  <sup style={{ letterSpacing: 1 }}>In Transit</sup>
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
                            <Storefront
                                name={'Vancouver'}
                                data={data.Vancouver[this.state.days]}
                            />
                            <Storefront
                                name={'Burnaby'}
                                data={data.Burnaby[this.state.days]}
                            />
                            <Storefront
                                name={'Richmond'}
                                data={data.Richmond[this.state.days]}
                            />
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


                            <Supplier data={this.state.storefrontData} name="Vancouver" processing={this.state.processing} />
                            <Supplier data={this.state.storefrontData} name="Burnaby" processing={this.state.processing} />
                            <Supplier data={this.state.storefrontData} name="Richmond" processing={this.state.processing} />
                        </Form>
                    </Row>
                </Row>
                {/* <Tabs className="col-12" defaultActiveKey="Home" id="uncontrolled-tab-example">
                    <Tab eventKey="Home" title="Home">
                    <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-5 mt-4 d-flex flex-column justify-content-top align-items-center">
                        <Form className="col-12 d-flex flex-column align-items-start ">

                            <div className="ml-3 mt-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>{this.props.selectedModule === 'Direct Ship: No Central Warehouse' ? 'Supplier' :'Central Warehouse'}</u></h4>
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-3">
                                    Add the shipment quantity you want to be delivered to respective storefronts.
                                </Form.Text>
                                <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2" onClick={() => this.setState({ days: 0 })} variant="outline-light">Reset</Button>
                                <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2 ml-5" onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
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
                {/* </div>
                        </Form>
                    </Col>
                    <Col style={{ overflowY: 'scroll' }} className="col-7 mt-3 border-2 border-left border-light">

                        <h4 className="mt-4 text-start" style={{ color: '#FFC108' }}><u>Storefronts</u></h4>
                        <div className="col-12 mt-3 d-flex flex-row">
                            <Storefront
                                name={'Vancouver'}
                                data={data.Vancouver[this.state.days]}
                            />
                            <Storefront
                                name={'Burnaby'}
                                data={data.Burnaby[this.state.days]}
                            />
                            <Storefront
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
                    </Tab>
                    <Tab eventKey="Warehouse" title="Warehouse" disabled={this.props.selectedModule === 'Direct Ship: No Central Warehouse'}>
                        
                    </Tab>
                </Tabs> */} */}
            </Container >
        )
    }
}

export default GamePage;