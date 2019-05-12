import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './views/App';
import './scss/index.scss';

ReactGA.initialize('UA-22199034-3', {
    gaOptions: {
        anonymize_ip: true,
    }
});
ReactGA.pageview(window.location.pathname);

const render = Component => {
    return ReactDOM.render(
        <Component/>, document.getElementById('root'));
};

render(App);

if (module.hot) {
    module.hot.accept('./views/App', () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        const NextApp = require('./views/App').default;
        render(NextApp);
    });
}