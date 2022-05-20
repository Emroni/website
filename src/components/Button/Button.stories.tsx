import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Button from './Button';

export default {
    args: {
        children: 'Lorem ipsum',
        icon: faUserCircle,
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