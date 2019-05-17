import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { asset } from '../constants/paths';
import * as ROUTES from '../constants/routes';
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Wrap from './Wrap';

export default function App() {

    return <BrowserRouter>
        <Route render={props =>
            <Wrap>
                <TransitionGroup>
                    <Header/>
                    <CSSTransition key={props.location.key} timeout={500}>
                        <Switch location={props.location}>
                            <Route exact path={ROUTES.HOME} component={Home}/>
                            <Route path={ROUTES.ABOUT} component={About}/>
                            <Route path={ROUTES.WORK} component={Work}/>
                            <Route exact path={ROUTES.RESUME} render={() => {
                                window.location.href = asset('Emre-Koc-Resume.pdf');
                            }}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Wrap>}/>
    </BrowserRouter>;

}