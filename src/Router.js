import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';


class Navigate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedModule: 'Direct Ship: No Central Warehouse'
        }
    }


    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/game" render={({ history }) => (
                            <GamePage history={history} selectedModule={this.state.selectedModule} />
                        )} />
                        <Route path="/">
                            <LandingPage setModule={(m) => this.setState({selectedModule: m})} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Navigate;