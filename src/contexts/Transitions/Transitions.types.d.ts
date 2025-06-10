interface TransitionsProviderProps {
    children: React.ReactNode;
}

interface TransitionsState {
    add(ref: React.RefObject, stall: number, callback: CallableFunction): void;
    current: TransitionsItem?;
    items: TransitionsItem[];
}

interface TransitionsItem {
    callback: CallableFunction;
    stall: number;
    ref: React.RefObject;
    top: number;
}
