export interface AnalyticsProps {
    children: React.ReactNode;
}

export interface AnalyticsState {
    trackEvent: (action: string, category: string, label?: string, value?: number) => void;
}
