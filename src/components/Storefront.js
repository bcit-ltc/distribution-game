import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';

class Storefront extends Component {

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
            <div className="col-4 ml-3 d-flex flex-column align-items-start justify-content-around">
                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</h5>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                    <h2>{this.props.inStock}</h2>  <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                </Form.Text>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3 ">
                    <h2>{this.props.sold}</h2><sup style={{ letterSpacing: 1 }}>Sold</sup>
                </Form.Text>
            </div>

        )
    }
}

export default Storefront;