import React from 'react';

const weights = [
    'font-light',
    'font-normal',
    'font-semibold',
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
    title: 'Styles',
};

export const Typography = () => <>
    <table>
        <thead>
            <tr>
                <th />
                {weights.map((weight, w) => (
                    <th className="text-left" key={w}>
                        {weight}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {sizes.map((size, s) => (
                <tr className="align-top hover:bg-gray-100" key={s}>
                    <td className="pr-4 pb-2 whitespace-nowrap">
                        {size}
                    </td>
                    {weights.map((weight, w) => (
                        <td className={`pb-2 ${size} ${weight}` } key={`${s}-${w}`}>
                            Lorem ipsum
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
</>;