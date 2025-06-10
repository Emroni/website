'use client';
import React, { createContext, RefObject, useContext } from 'react';

const TransitionsContext = createContext<TransitionsState>({} as TransitionsState);

export const useTransitions = () => useContext(TransitionsContext);

export class TransitionsProvider extends React.Component<TransitionsProviderProps, TransitionsState> {
    resizeTimeout: NodeJS.Timeout | null = null;
    nextTimeout: NodeJS.Timeout | null = null;

    constructor(props: TransitionsProviderProps) {
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

    handleAdd = (ref: RefObject<null>, stall: number, callback: CallableFunction) => {
        this.setState(
            prevState => ({
                items: [
                    ...prevState.items,
                    {
                        callback,
                        stall,
                        ref,
                        top: -1,
                    },
                ],
            }),
            this.handleResize
        );
    };

    handleResize = (e?: Event) => {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(this.resize, e ? 100 : 500);
    };

    resize = () => {
        this.setState(prevState => {
            const items = prevState.items.map(item => {
                item.top = item.ref.current
                    ? item.ref.current.getBoundingClientRect().top + window.scrollY
                    : Number.MAX_VALUE;
                return item;
            });

            items.sort((a, b) => (a.top < b.top ? -1 : 1));

            return {
                current: items[0],
                items,
            };
        }, this.handleScroll);
    };

    handleScroll = () => {
        const { current } = this.state;
        if (
            !this.nextTimeout &&
            current &&
            (window.scrollY >= current.top - window.innerHeight * 0.9 ||
                window.scrollY >= document.documentElement.offsetHeight - window.innerHeight - 100)
        ) {
            current.callback();

            this.setState(
                prevState => ({
                    items: prevState.items.slice(1),
                }),
                this.next
            );
        }
    };

    next = () => {
        const { current, items } = this.state;

        const next = items[0];
        let delay = 100;

        if (next) {
            if (next.top <= window.scrollY) {
                delay = 0;
            } else if (current?.stall) {
                delay = current.stall * 1000;
            } else if (current && Math.abs(current.top - next.top) < 10) {
                delay = 50;
            }
        }

        this.setState(
            {
                current: next,
            },
            () => {
                this.nextTimeout = setTimeout(() => {
                    this.nextTimeout = null;
                    this.handleScroll();
                }, delay);
            }
        );
    };

    render() {
        return <TransitionsContext.Provider value={this.state}>{this.props.children}</TransitionsContext.Provider>;
    }
}
