import React from 'react';
import Section from './Section';

export default {
    args: {
        background: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        heading: 'Heading',
    },
    component: Section,
    title: 'Components/Section',
};

const Template = (args) =>
    <Section {...args} />;

export const Default = Template.bind({});