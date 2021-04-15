import React, { createContext, useContext } from 'react';

const DEBUG = false;//process.env.NODE_ENV === 'development';

const TransitionContext = createContext({});

export const useTransition = () => useContext(TransitionContext);

export class TransitionProvider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            add: this.handleAdd,
            current: null,
            items: [],
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleAdd = (ref, stall, callback) => {
        this.setState(prevState => ({
            items: [
                ...prevState.items,
                {
                    callback,
                    stall,
                    ref,
                    top: -1,
                },
            ],
        }), this.handleResize);
    }

    handleResize = (e) => {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.resize, e ? 100 : 500)
    }

    resize = () => {
        this.setState(prevState => {
            const items = prevState.items.map(item => {
                item.top = item.ref.current.getBoundingClientRect().top + window.scrollY;
                return item;
            });

            items.sort((a, b) => a.top < b.top ? -1 : 1);

            return {
                current: items[0],
                items,
            };
        }, this.handleScroll);
    }

    handleScroll = () => {
        const {current} = this.state;
        if (!this.nextTimeout && current && (window.scrollY >= current.top - window.innerHeight * 0.9 || window.scrollY >= document.documentElement.offsetHeight - window.innerHeight - 100 || DEBUG)) {
            current.callback();

            this.setState(prevState => ({
                items: prevState.items.slice(1),
            }), this.next);
        }
    }

    next = () => {
        const {
            current,
            items,
        } = this.state;

        const next = items[0];
        let delay = 100;

        if (next) {
            if (next.top <= window.scrollY) {
                delay = 0;
            } else if (current.stall) {
                delay = current.stall * 1000;
            } else if (Math.abs(current.top - next.top) < 10) {
                delay = 50;
            }
        }

        this.setState({
            current: next,
        }, () => {
            this.nextTimeout = window.setTimeout(() => {
                delete this.nextTimeout;
                this.handleScroll();
            }, DEBUG ? 0 : delay);
        });
    }

    render() {
        return <TransitionContext.Provider value={this.state}>
            {this.props.children}
        </TransitionContext.Provider>;
    }

}