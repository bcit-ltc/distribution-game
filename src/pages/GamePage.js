import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, Spinner, Accordion, Table, Card, Form, Popover, OverlayTrigger, Toast } from 'react-bootstrap';
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
            showScorecard: false,
            showSideBar: false,
            centralWarehouse: false,
            gameData: {
                'storeFronts': [
                    { name: 'Vancouver', newOrder: 0, order: [0], inStock: 45, sold: 0 },
                    { name: 'Burnaby', newOrder: 0, order: [0], inStock: 45, sold: 0 },
                    { name: 'Richmond', newOrder: 0, order: [0], inStock: 45, sold: 0 }],
                'supplier':
                    { 'inStock': 100, newOrder: 0, order: [0], 'inTransit': 0 }
            },
            showNotification: false
        }
    }

    updateOrder(e, index) {
        console.log(e);
        let data = this.state.gameData;
        data.storeFronts[index].newOrder = e;
        //data.supplier.inStock = data.supplier.inStock - e;
        this.setState({ gameData: data });
    }

    updateSupplierOrder(e) {
        let data = this.state.gameData;

        data.supplier.newOrder = e;

        this.setState({ gameData: data })
    }

    setupSupplyChain() {

        let data = this.state.gameData;
        console.log(data);
        if (this.props.selectedModule === 'Direct Ship: Central Warehouse') {
            for (let x = 0; x < data.storeFronts.length; x++) {
                data.storeFronts[x].order = [0, 0, 0, 0, 0, 0];
            }
            data.supplier.order = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        } else {
            for (let x = 0; x < data.storeFronts.length; x++) {
                data.storeFronts[x].order = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
        }

        this.setState({ gameData: data });
    }


    processSupplierOrder() {


        let gameData = this.state.gameData;
        console.log(gameData);
        //for (let x = 0; x < gameData.storeFronts.length; x++) {
        //gameData.storeFronts[x].sold = this.itemSold(20);
        gameData.supplier.order.unshift(gameData.supplier.newOrder);
        gameData.supplier.inStock = gameData.supplier.inStock + gameData.supplier.order[gameData.supplier.order.length - 1];
        gameData.supplier.order.pop(gameData.supplier.order.length - 1);
        gameData.supplier.inTransit = gameData.supplier.order.reduce((a, b) => a + b, 0);
        //}

    }

    process() {

        if (this.state.centralWarehouse && this.state.gameData.supplier.inStock < this.calculateTotalNewOrder()) {
            this.setState({ showNotification: true });
        } else {

            const timer = setTimeout(() => {
                this.setState({ processing: false })
            }, 2000);
            if (this.state.centralWarehouse) {
                this.processSupplierOrder()
            }
            let gameData = this.state.gameData;

            for (let x = 0; x < gameData.storeFronts.length; x++) {
                gameData.storeFronts[x].sold = this.itemSold(5);
                gameData.storeFronts[x].order.unshift(gameData.storeFronts[x].newOrder);
                gameData.storeFronts[x].inStock = gameData.storeFronts[x].inStock + gameData.storeFronts[x].order[gameData.storeFronts[x].order.length - 1] - gameData.storeFronts[x].sold;
                gameData.storeFronts[x].order.pop(gameData.storeFronts[x].order.length - 1);
            }
            gameData.supplier.inStock = gameData.supplier.inStock - this.calculateTotalNewOrder();
            this.setState({ days: this.state.days + 1, processing: true, gameData: gameData });

            return () => clearTimeout(timer);
        }


    }

    itemSold(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    componentDidMount() {

        this.setState({ centralWarehouse: this.props.selectedModule === 'Direct Ship: Central Warehouse' });
        this.setupSupplyChain();

    }

    resetApplication() {

        this.setState({
            days: 0,
            // processing: false,
            // showScorecard: false,
            // showSideBar: false,
            centralWarehouse: this.state.centralWarehouse,
            gameData: {
                'storeFronts': [
                    { name: 'Vancouver', newOrder: 0, order: [0], inStock: 45, sold: 0 },
                    { name: 'Burnaby', newOrder: 0, order: [0], inStock: 45, sold: 0 },
                    { name: 'Richmond', newOrder: 0, order: [0], inStock: 45, sold: 0 }],
                'supplier':
                    { 'inStock': 100, newOrder: 0, order: [0], 'inTransit': 0 }
            }
        });
        this.setupSupplyChain();
    }

    calculateTotalNewOrder() {
        let order = 0;

        for (let x = 0; x < this.state.gameData.storeFronts.length; x++) {
            order = order + this.state.gameData.storeFronts[x].newOrder;
        }

        return order;
    }
    render() {

        return (
            <Container style={{ height: '100%', minHeight: '100vh' }} className=" bg-dark d-flex p-0 m-0 flex-column align-items-center justify-content-space-between col-12 h-100 text-white">

                <Row className=" sticky-top bg-dark p-2 d-flex p-0 m-0 text-start col-12 text-white justify-content-between align-items-center">
                    <span className="p-1">
                        <h5 className="text-info" style={{ letterSpacing: 3 }}>The Distribution Game</h5>
                        <h6 style={{ letterSpacing: 2 }}>{this.props.selectedModule}</h6>
                        {/* <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2" //onClick={() => this.resetApplication()} 
                            variant="outline-light">Reset</Button> */}
                        <Button size="sm" style={{ fontSize: '15px' }} className="text-monospace mt-2 " onClick={() => this.props.history.goBack()} variant="outline-light">Close</Button>
                    </span>
                    <span className="p-4">
                        <Button style={{ fontSize: 20 }} className="text-monospace " variant="success">
                            Day <Badge variant="light">{<AnimatedNumerical to={this.state.days} from={this.state.days} />}</Badge>
                        </Button>
                        <Scorecard />
                    </span>

                </Row>
                <Row style={{ height: '100%', backgroundColor: 'rgb(1,1,1,0.5)' }} className="col-12 text-start d-flex flex-row p-0 m-0 text-monospace">
                    <Col className="col-5 mt-4 d-flex flex-column justify-content-top align-items-center">
                        <Form className="col-12 d-flex flex-column align-items-start ">
                            <div className="ml-3 mt-3">
                                <h4 className="mt-1" style={{ color: '#FFC108' }}><u>{!this.state.centralWarehouse ? 'Supplier' : 'Central Warehouse'}</u></h4>
                                {!this.state.centralWarehouse ? null :
                                    <Row className="col-12 d-flex justify-content-around">
                                        <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                                            <h2>{<AnimatedNumerical to={this.state.gameData.supplier.inStock} from={0} />}</h2>
                                            <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                                        </Form.Text>
                                        <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-info mt-3">
                                            <h2>{<AnimatedNumerical to={this.state.gameData.supplier.inTransit} from={this.state.gameData.supplier.inTransit} />}</h2>
                                            <sup style={{ letterSpacing: 1 }}>In Transit</sup>
                                        </Form.Text>
                                    </Row>}
                                <Form.Text style={{ fontSize: 18 }} className="text-muted mt-3">
                                    {!this.state.centralWarehouse ? 'Add the shipment quantity you want to be delivered to respective storefronts.' : ' Add the shipment quantity you want to be delivered to respective storefronts and warehouse.'}
                                </Form.Text>
                                <Form.Group className="mt-1 d-flex justify-content-between align-items-center">

                                    <Button disabled={this.state.processing} style={{ fontSize: '15px' }} className="col-6" variant="primary mt-3" onClick={() => this.process()}>
                                        {this.state.processing ?
                                            <Spinner size="sm" animation="grow" role="status" />
                                            : 'Process'}
                                    </Button>

                                    {/* <Scorecard/> */}
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
                                    data={i}
                                    key={index + 1}
                                />
                            )}
                        </div>
                        {this.state.centralWarehouse ?
                            <div className="sticky-top"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 10,
                                }}
                            >
                                <Toast show={this.state.showNotification} onClose={() => this.setState({ showNotification: false })} className="bg-dark" style={{ minWidth: '300px' }} delay={5000} autohide>
                                    <Toast.Header>
                                        <strong className="mr-auto text-info">Order Processing</strong>
                                        {/* <small>just now</small> */}
                                    </Toast.Header>
                                    <Toast.Body >Your order cannot be processed due to the unavailability of stock in the warehouse.
                                    <Row className="col-12 d-flex justify-content-around">
                                            <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                                                <h2>{this.state.gameData.supplier.inStock
                                                    // <AnimatedNumerical to={this.state.gameData.supplier.inStock} from={0} />
                                                }
                                                </h2>
                                                <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                                            </Form.Text>
                                            <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3">
                                                <h2>{<AnimatedNumerical to={this.calculateTotalNewOrder()} from={0} />}</h2>
                                                <sup style={{ letterSpacing: 1 }}>Order</sup>
                                            </Form.Text>
                                        </Row>
                                    </Toast.Body>
                                </Toast>
                            </div> : null}
                    </Col>

                    <Row style={{ minHeight: '80vh' }} className="p-0 m-0 col-12">
                        <Form className="col-12 mt-3 d-flex flex-column justify-content-start">
                            {this.state.centralWarehouse ?
                                <Accordion >
                                    <Card className="bg-dark ">
                                        <Card.Header className="border-white">
                                            <Accordion.Toggle className="text-white " as={Button} variant="link" eventKey="0">
                                                Central Warehouse Supplier
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse className="p-2 " eventKey="0">
                                            <Supplier
                                                updateOrder={(i) => this.updateSupplierOrder(i)}
                                                data={this.state.gameData.supplier.order}
                                                name={null}
                                                processing={this.state.processing} />
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion> : null}

                            {this.state.gameData.storeFronts.map((i, index) =>
                                <Supplier
                                    updateOrder={(i) => this.updateOrder(i, index)}
                                    data={i.order}
                                    name={i.name}
                                    processing={this.state.processing} />)}
                        </Form>
                    </Row>
                </Row>
            </Container >
        )
    }
}

export default GamePage;