const colorGroups = [
    [
        'bg-black',
        'bg-white',
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

const fontWeights = [
    'font-light',
    'font-normal',
    'font-semibold',
];

const fontSizes = [
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

export const Colors = () =>
    <div>
        {colorGroups.map((group, g) => (
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

export const Typography = () => <table>
    <thead>
        <tr>
            <th />
            {fontWeights.map((weight, w) => (
                <th className="text-left" key={w}>
                    {weight}
                </th>
            ))}
        </tr>
    </thead>
    <tbody>
        {fontSizes.map((size, s) => (
            <tr className="align-top hover:bg-gray-100" key={s}>
                <td className="pr-4 pb-2 whitespace-nowrap">
                    {size}
                </td>
                {fontWeights.map((weight, w) => (
                    <td className={`pb-2 ${size} ${weight}`} key={`${s}-${w}`}>
                        Lorem ipsum
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
</table>;