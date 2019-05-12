import React from 'react';
import classnames from 'classnames';

const DEBUG = process.env.NODE_ENV === 'development';

export default class Trans extends React.Component {

    constructor(props) {
        super(props);

        this.offset = 0;
        this.top = Number.MAX_VALUE;
        this.element = React.createRef();

        this.state = {
            active: false,
        };
    }

    componentDidMount() {
        add(this);
    }

    componentWillUnmount() {
        remove(this);
    }

    render() {
        const Tag = this.props.tag || 'div';

        const className = classnames(`${this.props.className || ''} trans`, {
            active: this.state.active,
        });

        return <Tag {...this.props} ref={this.element} className={className}>{this.props.children}</Tag>;
    }
}

const list = [];
let current, timeout;

function add(trans) {
    const bind = !list.length;
    list.push(trans);

    if (bind) {
        window.addEventListener('resize', resizeDelayed);
        window.addEventListener('scroll', scroll);
    }

    resizeDelayed();
}

function remove(trans) {
    const index = list.indexOf(trans);
    if (index !== -1) {
        list.splice(index, 1);
        next();
    }
}

function resizeDelayed(e) {
    clearTimeout(timeout);
    timeout = setTimeout(resize, e ? 100 : 1000);
}

function resize() {
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            const trans = list[i];
            trans.top = trans.element.current.getBoundingClientRect().top + window.scrollY;
        }

        list.sort((a, b) => {
            return (a.top < b.top) ? -1 : 1;
        });

        current = list[0];
        scroll();
    }
}

function scroll(e) {
    if (!e) {
        clearTimeout(timeout);
        timeout = null;
    }

    if (!timeout && current && (window.scrollY >= current.top - window.innerHeight * 0.9 || window.scrollY >= document.documentElement.offsetHeight - window.innerHeight - 100 || DEBUG)) {
        current.setState(prevState => ({
            ...prevState,
            active: true,
        }));

        list.shift();
        next();
    }
}

function next() {
    if (list.length) {
        const next = list[0];
        let delay = 100;
        
        if (next.top <= window.scrollY) {
            delay = 0;
        } else if (current.props.stall) {
            delay = parseFloat(current.props.stall) * 1000;
        } else if (Math.abs(current.top - next.top) < 10) {
            delay = 50;
        }
        
        current = next;
        timeout = setTimeout(scroll, DEBUG ? 0 : delay);

    } else {
        current = null;
        window.removeEventListener('resize', resizeDelayed);
        window.removeEventListener('scroll', scroll);
    }
}