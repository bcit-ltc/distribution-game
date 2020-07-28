import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { ShopWindow } from 'react-bootstrap-icons';
import AnimatedNumerical from '../components/AnimatedNumerical';

class Storefront extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            inStock: 0,
            sold: 0
        }
    }

    componentDidMount() {

        console.log(this.props.data.inStock);
        this.setState({
            //inStock: this.props.data.inStock,
            sold: this.props.data.sold
        })
    }

    render() {
        return (

            <div className="d-flex flex-column align-items-start justify-content-around">
                <h5 style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</h5>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success mt-3">
                    <h2>{<AnimatedNumerical
                        to={this.props.data.inStock}
                        from={this.state.inStock} />}</h2>
                    <sup style={{ letterSpacing: 1 }}>In Stock</sup>
                </Form.Text>
                <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger mt-3 ">
                    <h2>{<AnimatedNumerical
                    duration={100}
                        to={this.props.data.sold}
                        from={this.props.data.sold - this.state.sold} />}</h2>
                    <sup style={{ letterSpacing: 1 }}>Sold</sup>
                </Form.Text>
            </div>

        )
    }
}

export default Storefront;