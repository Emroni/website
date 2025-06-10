import React from 'react';
import Transition from './Transition';

export default {
    args: {
        children: 'Lorem ipsum',
        className: '',
        fade: true,
        stall: 0,
        tag: 'div',
    },
    component: Transition,
    title: 'Components/Transition',
};

const Template = (args) =>
    <Transition {...args} />;

export const Default = Template.bind({});