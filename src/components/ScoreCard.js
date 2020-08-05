import React, { Component } from 'react';
import { Button, Table, Col, Toast, Row, Card, Dropdown } from 'react-bootstrap';
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
            <Dropdown className="mt-3">
                <Dropdown.Toggle size="sm" variant="info" id="dropdown-basic">
                    ScoreCard
            </Dropdown.Toggle>

                <Dropdown.Menu className="mt-1">
                    <Dropdown.Item href="#/action-1">
                        <Table className="m-0 p-0 col-8" style={{ fontSize: '12px' }}>
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
                                <tr>
                                    <td colSpan="2">Daily Profit </td>
                                    <td colSpan="2">$0</td>

                                </tr>
                                <tr>
                                    <td colSpan="2">Order Fill Rate </td>
                                    <td colSpan="2">20%</td>

                                </tr>
                            </tbody>
                        </Table>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default ScoreCard;