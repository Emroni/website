import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { asset } from '../constants/paths';
import * as ROUTES from '../constants/routes';
import Header from './Header';
import Home from './Home';
import Wrap from './Wrap';

export default function App() {

    return <BrowserRouter>
        <Route render={props =>
            <Wrap>
                <Header/>
                <Switch location={props.location}>
                    <Route exact path={ROUTES.HOME} component={Home}/>
                    <Route exact path={ROUTES.RESUME} render={() => {
                        window.location.href = asset('Emre-Koc-Resume.pdf');
                    }}/>
                </Switch>
            </Wrap>}/>
    </BrowserRouter>;

}