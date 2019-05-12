import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Trans from './Trans';

export default class Video extends React.Component {

    constructor(props) {
        super(props);

        this.element = React.createRef();

        this.state = {
            active: false,
            visible: false,
        };

        this.resize = this.resize.bind(this);
        this.scroll = this.scroll.bind(this);
        this.show = this.show.bind(this);
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            window.addEventListener('resize', this.resize);
            window.addEventListener('scroll', this.scroll);
            this.resize();
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('scroll', this.scroll);
    }

    componentWillUpdate(nextProps, nextState) {
        const {current} = this.element;

        if (current) {
            if (this.state.size !== nextState.size) {
                current.src = `/assets/${this.props.slug}-${nextState.size}.mp4`;

            } else if (nextState.visible) {
                if (nextState.active) {
                    current.play();
                } else {
                    current.pause();
                }
            }
        }
    }

    show() {
        this.setState(prevState => ({
            ...prevState,
            visible: true,
        }));
    }

    resize() {
        if (this.element.current) {
            const rect = this.element.current.getBoundingClientRect();
            this.top = rect.top + window.scrollY - window.innerHeight + rect.height * 0.7;
            this.bottom = rect.bottom + window.scrollY - rect.height * 0.7;

            let size = 320;
            if (rect.width >= 640) {
                size = 960;
            } else if (rect.width >= 480) {
                size = 640;
            } else if (rect.width >= 320) {
                size = 480;
            }
            if (this.state.size !== size) {
                this.setState(prevState => ({
                    ...prevState,
                    size,
                    visible: false,
                }));
            }

            this.scroll();
        }
    }

    scroll() {
        const active = (window.scrollY > this.top && window.scrollY < this.bottom);
        if (this.state.active !== active) {
            this.setState(prevState => ({
                ...prevState,
                active,
            }));
        }
    }

    render() {
        const {background, color, href, to} = this.props;
        const {active, visible} = this.state;

        const backgroundStyle = {
            backgroundColor: color,
        };

        const videoClass = classnames({
            active,
            visible,
        });

        let element =
            <video ref={this.element} className={videoClass} onLoadedMetadata={this.show} playsInline muted loop/>;

        return <Trans className={`video ${background}`}>
            {href ?
                <a href={href} target="_blank" rel="noopener noreferrer">{element}</a> : to ?
                    <Link to={to}>{element}</Link> :
                    <div>{element}</div>}
            <Trans className="background" style={backgroundStyle}/>
        </Trans>;
    }

}