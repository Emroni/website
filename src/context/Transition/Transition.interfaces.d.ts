interface TransitionProviderProps {
    children: any;
}

interface TransitionState {
    add(ref: any, stall: number, callback: CallableFunction): void;
    current: any;
    items: any[];
}