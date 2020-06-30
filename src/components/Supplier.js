import React, { Component } from 'react';
import { Button, Container, Col, Badge, Row, ProgressBar, Form } from 'react-bootstrap';

import { ShopWindow } from 'react-bootstrap-icons';


class Supplier extends Component {

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
            <Form.Group className="mt-1">
                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</Form.Label>
                <ProgressBar style={{ height: '25px' }} className="mb-2">
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="dark" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="success" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                    <ProgressBar animated={false} variant="info" now={8.4} key={1} label={`8.3%`} />
                    <ProgressBar animated={false} variant="warning" now={8.4} label={`8.3%`} key={2} />
                    <ProgressBar animated={false} variant="danger" label={`8.3%`} now={8.4} key={3} />
                </ProgressBar>
                <Form.Control className="col-1" type="number" placeholder="0" />
            </Form.Group>

        )
    }
}

export default Supplier;