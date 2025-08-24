export interface TransitionsProps {
    children: React.ReactNode;
}

export interface TransitionsState {
    add(ref: React.RefObject<HTMLElement | null>, stall: number, callback: CallableFunction): void;
}

export interface TransitionsItem {
    active: boolean;
    callback: CallableFunction;
    stall: number;
    ref: React.RefObject<HTMLElement | null>;
    top: number;
}
