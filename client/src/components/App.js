import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import {RouteWrapper} from '../styles/RouteWrapper';

class App extends Component {
    noMatch = ({ location }) => (
        <div>
            <h3>404</h3>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );

    render() {
    return (
        <BrowserRouter>
            <RouteWrapper>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={this.noMatch} />
                </Switch>
            </RouteWrapper>
        </BrowserRouter>
    );
    }
}

export default connect()(App);
