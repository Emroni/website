import React from 'react';
import Block from './Block';

export default {
    args: {
        items: 'Item 1,Item 2,Item 3',
        title: 'Block',
    },
    component: Block,
    title: 'Components/Block',
};

const Template = (args) =>
    <Block {...args} />;

export const Default = Template.bind({});