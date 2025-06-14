'use client';
import { createContext, useContext, useEffect } from 'react';
import ReactGA from 'react-ga4';

const AnalyticsContext = createContext<AnalyticsState>({} as AnalyticsState);

export const useAnalytics = () => useContext(AnalyticsContext);

export function AnalyticsProvider({ children }: AnalyticsProps) {
    useEffect(() => {
        ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID, {
            gaOptions: {
                anonymizeIp: true,
            },
        });
    }, []);

    function trackEvent(action: string, category: string, label?: string, value?: number) {
        ReactGA.event({
            action,
            category,
            label,
            value,
        });
    }

    const state = {
        trackEvent,
    };

    return <AnalyticsContext.Provider value={state}>{children}</AnalyticsContext.Provider>;
}
