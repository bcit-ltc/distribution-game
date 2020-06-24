import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';


export default function Navigate() {


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/game" render={({ history }) => (
                        <GamePage history={history} />
                    )} />
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}