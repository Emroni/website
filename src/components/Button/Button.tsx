import clsx from 'clsx';

export default function Button({ children, className, disabled, type = 'button', onClick }: ButtonProps) {

    const buttonClasses = clsx('px-3 py-2 rounded-lg text-white', {
        'bg-gray-500': disabled,
        'bg-blue-500 hover:bg-blue-600': !disabled,
    }, className);

    return <button className={buttonClasses} disabled={disabled} type={type} onClick={onClick}>
        {children}
    </button>;

}