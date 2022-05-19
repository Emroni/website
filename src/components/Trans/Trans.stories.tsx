import React from 'react';
import Trans from './Trans';

export default {
    args: {
        children: 'Lorem ipsum',
        className: '',
        fade: true,
        stall: 0,
        tag: 'div',
    },
    component: Trans,
    title: 'Components/Trans',
};

const Template = (args) =>
    <Trans {...args} />;

export const Default = Template.bind({});