import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID, {
    gaOptions: {
        anonymizeIp: true,
    },
});

export function trackEvent(action: string, category: string, label?: string, value?: number) {
    ReactGA.event({
        action,
        category,
        label,
        value,
    });
}
