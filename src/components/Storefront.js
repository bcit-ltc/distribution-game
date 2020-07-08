import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ShopWindow } from 'react-bootstrap-icons';
import AnimatedNumerical from '../components/AnimatedNumerical';

class Storefront extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            inStock: 100,
            sold: null
        }
    }

    update() {
        this.setState({ inStock: this.state.inStock + 3, sold: this.state.sold - 8 });
    }

    componentDidMount() {
        this.setState({ inStock: this.state.inStock + this.props.data.stockReceived, sold: this.props.data.sold })
    }

    render() {
        return (

            <div className="col-4 ml-3 d-flex flex-column align-items-start justify-content-around">
                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</h5>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                    <h2>{<AnimatedNumerical to={this.state.inStock - this.props.data.sold} from={this.state.inStock} />}</h2>  <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                </Form.Text>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3 ">
                    <h2>{<AnimatedNumerical to={this.props.data.sold} from={this.props.data.sold - this.state.sold} />}</h2><sup style={{ letterSpacing: 1 }}>Sold</sup>
                </Form.Text>
            </div>

        )
    }
}

export default Storefront;