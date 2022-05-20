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
    backgrounds: {
        default: 'White',
        values: [
            { name: 'White', value: '#ffffff' },
            { name: 'Blue 500', value: '#193C56' },
        ],
    },
    controls: {
        matchers: {
            color: /(bg|text)-*/,
            date: /date$/,
        },
    },
};