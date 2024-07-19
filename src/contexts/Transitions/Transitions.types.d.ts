interface TransitionsProviderProps {
    children: any;
}

interface TransitionsState {
    add(ref: any, stall: number, callback: CallableFunction): void;
    current: any;
    items: any[];
}