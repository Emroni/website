import { ThemeProvider, TransitionProvider } from '@/providers';
import '../src/styles/index.css';

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <TransitionProvider>
                <Story />
            </TransitionProvider>
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        matchers: {
            color: /(bg|text)-*/,
            date: /date$/,
        },
    },
};