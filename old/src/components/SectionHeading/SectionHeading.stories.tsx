import React from 'react';
import SectionHeading from './SectionHeading';

export default {
    args: {
        children: 'Lorem ipsum'
    },
    component: SectionHeading,
    title: 'Components/SectionHeading',
};

const Template = (args) =>
    <SectionHeading {...args} />;

export const Default = Template.bind({});