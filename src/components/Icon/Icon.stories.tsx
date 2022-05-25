import React from 'react';
import Icon from './Icon';

export default {
    args: {
        className: '',
        name: 'github'
    },
    argTypes: {
        name: {
            control: {
                type: 'select',
            },
            options: [
                'codepen',
                'envelope',
                'github',
                'linkedin',
                'stackoverflow',
                'twitter',
                'upwork',
            ],
        },
    },
    component: Icon,
    title: 'Components/Icon',
};

const Template = (args) =>
    <Icon {...args} />;

export const Default = Template.bind({});