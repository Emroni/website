import React from 'react';
import List from './List';

export default {
    args: {
        children: <>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
        </>,
        className: '',
        tag: 'ul',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        tag: {
            control: {
                type: 'select',
            },
            options: ['ol', 'ul'],
        },
    },
    component: List,
    title: 'Components/List',
};

const Template = (args) =>
    <List {...args} />;

export const Default = Template.bind({});