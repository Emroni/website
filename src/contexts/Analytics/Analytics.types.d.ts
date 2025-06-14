interface AnalyticsProps {
    children: React.ReactNode;
}

interface AnalyticsState {
    trackEvent: (action: string, category: string, label?: string, value?: number) => void;
}
