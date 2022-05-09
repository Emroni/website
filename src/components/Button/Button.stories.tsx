import React from 'react';
import Button from './Button';

export default {
    args: {
        children: 'Lorem ipsum',
        className: '',
        disabled: false,
        type: 'button',
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: [ 'button', 'submit' ],
        },
        onClick: 'onClick',
    },
    component: Button,
    title: 'Components/Button',
};

const Template = (args) =>
    <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
