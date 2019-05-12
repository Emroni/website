import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

class Wrap extends React.Component {

    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            ReactGA.pageview(window.location.pathname);
            setTimeout(this.start, 100);
        }
    }

    start() {
        this.top = window.scrollY;

        if (this.top > 0) {
            this.index = 0;
            this.steps = [];

            const steps = Math.min(1, this.top / 300) * 60;
            for (let i = steps; i >= 0; i--) {
                const t = i * (1 / steps);
                const n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                this.steps.push(n);
            }

            this.scroll();
        }
    }

    scroll() {
        if (this.index < this.steps.length - 1) {
            requestAnimationFrame(this.scroll);
            window.scrollTo(0, this.top * this.steps[++this.index]);
        }
    }

    render() {
        return this.props.children;
    }

}

export default withRouter(Wrap);