import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionProvider } from './providers';
import App from './views';
import './scss/index.scss';

ReactDOM.render(
    <TransitionProvider>
        <App/>
    </TransitionProvider>, document.getElementById('root'));