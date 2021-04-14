import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, TransitionProvider } from './providers';
import App from './views';
import './scss/index.scss';

ReactDOM.render(
    <ThemeProvider>
        <TransitionProvider>
            <App/>
        </TransitionProvider>
    </ThemeProvider>, document.getElementById('root'));