import React from 'react';

const groups = [
    [
        'bg-black',
        'bg-white',
    ],
    [
        'bg-gray-50',
        'bg-gray-100',
        'bg-gray-200',
        'bg-gray-300',
        'bg-gray-400',
        'bg-gray-500',
        'bg-gray-600',
        'bg-gray-700',
        'bg-gray-800',
        'bg-gray-900',
    ],
    [
        'bg-blue-50',
        'bg-blue-100',
        'bg-blue-200',
        'bg-blue-300',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
        'bg-blue-700',
        'bg-blue-800',
        'bg-blue-900',
    ],
];

export default {
    title: 'Styles',
};

export const Colors = () =>
    <div>
        {groups.map((group, g) => (
            <div className="flex" key={g}>
                {group.map((color, c) => (
                    <div className="m-2" key={`${g}-${c}`}>
                        <div className={`${color} border h-16 w-16`} />
                        <div className="mt-1 text-xs">
                            {color.replace('bg-', '')}
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>;