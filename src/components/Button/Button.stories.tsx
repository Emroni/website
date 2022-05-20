import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Button from './Button';

export default {
    args: {
        url: 'http://emrekoc.io',
    },
    argTypes: {
        icon: {
            table: {
                disable: true,
            },
        },
    },
    component: Button,
    title: 'Components/Button',
};

const Template = (args) =>
    <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Lorem ipsum',
    icon: faUserCircle,
};

export const Image = Template.bind({});
Image.args = {
    image: '/assets/clients/just.svg',
};
Image.parameters = {
    backgrounds: {
        default: 'Blue 500',
    },
};