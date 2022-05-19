import React from 'react';

const fonts = [
    'font-open',
    'font-work',
];

const sizes = [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
];

export default {
    title: 'Styles/Typography',
};

export const Classes = () =>
    <table>
        <thead>
            <tr>
                <th />
                <th className="text-left font-open font-normal">
                    Body (font-open)
                </th>
                <th className="text-left font-work">
                    Heading (font-work)
                </th>
            </tr>
        </thead>
        <tbody>
            {sizes.map((size, s) => (
                <tr className="align-top hover:bg-gray-100" key={s}>
                    <td className="pr-4 whitespace-nowrap">
                        {size}
                    </td>
                    {fonts.map((font, f) => (
                        <td className={`${font} ${size}`} key={`${f}-${s}`} title={`${font} ${size}`}>
                            Lorem ipsum
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>;


export const Tags = () =>
    <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Body, Paragraph</p>
    </div>;