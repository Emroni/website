import React, { createContext, useContext } from 'react';

const TransitionContext = createContext({});

export const useTransition = () => useContext(TransitionContext);

export class TransitionProvider extends React.Component<TransitionProviderProps, TransitionState> {

    resizeTimeout: any;
    nextTimeout: any;

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
        this.setState((prevState: any) => ({
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

    handleResize = (e?: any) => {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.resize, e ? 100 : 500)
    }

    resize = () => {
        this.setState((prevState: any) => {
            const items = prevState.items.map(item => {
                item.top = item.ref.current ? (item.ref.current.getBoundingClientRect().top + window.scrollY) : Number.MAX_VALUE;
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
        const { current } = this.state as any;
        if (!this.nextTimeout && current && (window.scrollY >= current.top - window.innerHeight * 0.9 || window.scrollY >= document.documentElement.offsetHeight - window.innerHeight - 100)) {
            current.callback();

            this.setState((prevState: any) => ({
                items: prevState.items.slice(1),
            }), this.next);
        }
    }

    next = () => {
        const {
            current,
            items,
        } = this.state as any;

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
            }, delay);
        });
    }

    render() {
        const { children } = this.props as any;

        return <TransitionContext.Provider value={this.state}>
            {children}
        </TransitionContext.Provider>;
    }

}