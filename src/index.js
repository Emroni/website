import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, TransitionProvider } from './providers';
import Sections from './sections';
import './scss/index.scss';

ReactDOM.render(
    <ThemeProvider>
        <TransitionProvider>
            <Sections/>
        </TransitionProvider>
    </ThemeProvider>, document.getElementById('root'));