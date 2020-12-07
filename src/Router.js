import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,HashRouter, Link } from "react-router-dom";
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
            <HashRouter basename="/">
                <div>
                    <Switch>
                        <Route path="/directShipGame" render={({ history }) => (
                            <GamePage history={history} selectedModule={'Direct Ship: No Central Warehouse'} />
                        )} />
                        <Route path="/baseGame" render={({ history }) => (
                            <GamePage history={history} selectedModule={'Direct Ship: Central Warehouse'} />
                        )} />
                        <Route path="/">
                            <LandingPage setModule={(m) => this.setState({selectedModule: m})} />
                        </Route>
                    </Switch>
                </div>
                </HashRouter>
        );
    }
}
export default Navigate;