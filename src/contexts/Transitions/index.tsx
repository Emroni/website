'use client';
import { createContext, RefObject, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDebounceCallback, useEventListener, useTimeout } from 'usehooks-ts';
import { TransitionsItem, TransitionsProps, TransitionsState } from './types';

const TransitionsContext = createContext<TransitionsState>({} as TransitionsState);

export const useTransitions = () => useContext(TransitionsContext);

export function TransitionsProvider({ children }: TransitionsProps) {
    const [delay, setDelay] = useState<number | null>(null);
    const [items, setItems] = useState<TransitionsItem[]>([]);

    const nextItem = useMemo(() => {
        return items.find(item => !item.active && item.top >= 0);
    }, [items]);

    const add = useCallback((ref: RefObject<null>, stall: number, callback: CallableFunction) => {
        // Add to items
        setItems(prevItems => [
            ...prevItems,
            {
                active: false,
                callback,
                stall,
                ref,
                top: -1,
            },
        ]);
    }, []);

    const resize = useCallback(() => {
        setItems(prevItems => {
            // Update top positions of items
            const items = prevItems.map(item => ({
                ...item,
                top: item.ref.current ? item.ref.current.getBoundingClientRect().top + window.scrollY : -1,
            }));

            // Sort items by top position
            items.sort((a, b) => a.top - b.top);
            return items;
        });
    }, []);

    const debounceResize = useDebounceCallback(resize, 100);

    const scroll = useCallback(() => {
        // Check next item and scroll position
        if (
            delay ||
            !nextItem ||
            !nextItem.ref.current ||
            (nextItem.top > window.scrollY + window.innerHeight * 0.9 &&
                window.scrollY < document.documentElement.offsetHeight - window.innerHeight - 100)
        ) {
            return;
        }

        // Get delay for next item
        let newTimeout = 50;
        if (nextItem) {
            if (nextItem.top <= window.scrollY) {
                newTimeout = 0;
            } else if (nextItem?.stall) {
                newTimeout = nextItem.stall * 1000;
            }
        }
        setDelay(newTimeout);

        // Active current item
        nextItem.callback();
        setItems(prevItems => prevItems.map(item => (item === nextItem ? { ...item, active: true } : item)));
    }, [nextItem, delay]);

    useEventListener('resize', debounceResize);
    useEventListener('scroll', scroll);

    useEffect(() => {
        // Initial resize
        debounceResize();
    }, [debounceResize]);

    useEffect(() => {
        // Trigger scroll when next item is updated
        scroll();
    }, [nextItem, scroll]);

    useTimeout(() => {
        // Clear delay after timeout
        setDelay(null);
    }, delay);

    const state = useMemo<TransitionsState>(
        () => ({
            add,
        }),
        [add]
    );

    return <TransitionsContext.Provider value={state}>{children}</TransitionsContext.Provider>;
}
