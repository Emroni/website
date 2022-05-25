import { ThemeProvider, TransitionProvider } from '@/providers';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
import '../src/styles/index.css';

const twConfig = resolveConfig(tailwindConfig);

export const decorators = [
    (Story) => <ThemeProvider>
        <TransitionProvider>
            <Story />
        </TransitionProvider>
    </ThemeProvider>,
];

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    backgrounds: {
        default: 'white',
        values: Object.entries(twConfig.theme.colors)
            .map(([name, value]) => ({ name, value })),
    },
    controls: {
        matchers: {
            color: /(bg|text)-*/,
            date: /date$/,
        },
    },
};