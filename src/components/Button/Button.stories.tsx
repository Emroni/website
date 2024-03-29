import React from 'react';
import Button from './Button';

export default {
    args: {
        children: 'Lorem ipsum',
        className: '',
        icon: undefined,
        image: undefined,
        light: false,
        url: 'http://emrekoc.io',
    },
    argTypes: {
        icon: {
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
            ],
        },
        image: {
            control: {
                type: 'select',
            },
            options: [
                '/assets/clients/just.svg',
                '/assets/clients/noderelate.svg',
                '/assets/clients/watch4media.svg',
                '/assets/clients/marathon.svg',
                '/assets/clients/kromatic.svg',
                '/assets/clients/iglu.png',
                '/assets/clients/siccode.svg',
                '/assets/clients/pressive.png',
                '/assets/clients/nijgh.png',
                '/assets/clients/xim.png',
                '/assets/clients/tothepoint.png',
                '/assets/clients/reelmetrics.svg',
            ],
        },
    },
    component: Button,
    title: 'Components/Button',
};

const Template = (args) =>
    <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: 'github',
};

export const Image = Template.bind({});
Image.args = {
    image: '/assets/clients/just.svg',
    imageClassName: '',
    light: true,
};
Image.parameters = {
    backgrounds: {
        default: 'blue-500',
    },
};