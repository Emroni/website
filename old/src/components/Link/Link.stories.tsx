import React from 'react';
import Link from './Link';

export default {
    args: {
        children: 'Lorem ipsum',
        href: 'http://emrekoc.io',
    },
    component: Link,
    title: 'Components/Link',
};

const Template = (args) =>
    <Link {...args} />;

export const Default = Template.bind({});