import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';

import { ShopWindow } from 'react-bootstrap-icons';


class Supplier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            value: 8.5,
            data: [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 9, 7],
        }
    }
    componentDidMount() {
        this.setState({ value: 100 / 8 });
        this.processShipment()
    }

    processShipment() {
        this.setState({ value: 1 });
        const timer = setInterval(() => {
            if (this.state.value < 8.5) {
                this.setState({ value: this.state.value + 2 })
            }

        }, 1050);

        return () => clearInterval(timer);


    }

    renderProgressBar() {
        //let data = [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 9, 7];

        let my = this.props.data.map((element, index) => (<ProgressBar animated={this.props.processing} variant={index % 2 === 0 ? "info" : 'danger'} now={this.state.value} key={1} label={element} />)
        )

        return my;
    }

    render() {

        return (
            <Form.Group className="mt-1">
                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</Form.Label>
                <ProgressBar style={{ height: '25px' }} className="mb-2">
                    {/* <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={'0'} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" now={this.state.value} label={`0`} key={3} />
                    <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={`0`} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" label={`0`} now={this.state.value} key={3} />
                    <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={`0`} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" now={this.state.value} label={`0`} key={3} />
                    <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={`0`} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" label={`0`} now={this.state.value} key={3} />
                    <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={`0`} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" now={this.state.value} label={`0`} key={3} />
                    <ProgressBar animated={this.props.processing} variant="info" now={this.state.value} key={1} label={`0`} />
                    <ProgressBar animated={this.props.processing} variant="dark" now={this.state.value} label={`0`} key={2} />
                    <ProgressBar animated={this.props.processing} variant="danger" label={`0`} now={this.state.value} key={3} /> */}
                    {this.renderProgressBar()}
                </ProgressBar>
                <Form.Control className="col-1" type="number" min="0" placeholder="0" />
            </Form.Group>

        )
    }
}

export default Supplier;