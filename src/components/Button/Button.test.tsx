import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

test('displays default', () => {
    const mockClick = jest.fn();
    
    render(<Button onClick={mockClick}>Label</Button>);

    const button = screen.queryByRole('button');
    expect(button).not.toBeNull();
    expect(mockClick).toBeCalledTimes(0);

    fireEvent.click(button);
    expect(mockClick).toBeCalledTimes(1);
});

test('displays disabled', () => {
    const mockClick = jest.fn();

    render(<Button disabled onClick={mockClick}>Label</Button>);

    expect(mockClick).toBeCalledTimes(0);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).toBeCalledTimes(0);
});
