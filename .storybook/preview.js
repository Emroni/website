import '../src/styles/index.css';

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