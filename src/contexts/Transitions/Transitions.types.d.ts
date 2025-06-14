interface TransitionsProps {
    children: React.ReactNode;
}

interface TransitionsState {
    add(ref: React.RefObject, stall: number, callback: CallableFunction): void;
}

interface TransitionsItem {
    active: boolean;
    callback: CallableFunction;
    stall: number;
    ref: React.RefObject;
    top: number;
}
