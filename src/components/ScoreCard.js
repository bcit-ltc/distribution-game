import React, { Component } from 'react';
import { Button, Table, Col, Toast, Row, Card, Accordion } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';
import AnimatedNumerical from '../components/AnimatedNumerical';
import Sidebar from "react-sidebar";
class ScoreCard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <Sidebar
                sidebar={<Accordion className="bg-dark" defaultActiveKey="">
                    <Card className="bg-dark">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Score Card
        </Accordion.Toggle>
                        <Accordion.Collapse className=" mt-5 bg-secondary position-fixed" eventKey="0">
                        <Table className="m-0 p-0 col-8" style={{fontSize: '12px'}}>
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan="2">Categories</th>
                                            
                                            <th colSpan="2">To Date</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">Sales</td>
                                            
                                            <td>$0</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Cost of Goods Sold</td>
                                            <td colSpan="2">0</td>
                                            
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Gross Margin</td>
                                            <td colSpan="2">$0</td>
                                            
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Order Costs </td>
                                            <td colSpan="2">0</td>
                                            
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Inventory Costs </td>
                                            <td colSpan="2">0</td>
                                            
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Operating Profit </td>
                                            <td colSpan="2">$0</td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                        </Accordion.Collapse>
                    </Card>
                    <Button onClick={() => this.props.close()}>Close</Button>
                </Accordion>}
                open={this.state.showSideBar}
                onSetOpen={() => this.setState({ showSideBar: true })}
                styles={{
                    root: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: "hidden",
                        height: '990px',
                        width: '450px'
                    },
                    sidebar: {
                        zIndex: 2,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        transition: "transform .3s ease-out",
                        WebkitTransition: "-webkit-transform .3s ease-out",
                        willChange: "transform",
                        overflowY: "auto"
                    },
                    content: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                        transition: "left .3s ease-out, right .3s ease-out"
                    },
                    overlay: {
                        zIndex: 1,
                        position: "fixed",
                        top: 10,
                        left: 30,
                        right: 0,
                        bottom: 0,
                        opacity: 0,
                        visibility: "hidden",
                        transition: "opacity .3s ease-out, visibility .3s ease-out",
                        backgroundColor: "rgba(0,0,0,.3)"
                    },
                    dragHandle: {
                        zIndex: 1,
                        position: "fixed",
                        top: 0,
                        bottom: 0
                    }
                }}>
                <Button onClick={() => this.setState({ showSideBar: true })}>
                    ScoreCard
                                        </Button>


            </Sidebar>
        )
    }
}

export default ScoreCard;