'use client';
import { Body } from './Layout.styled';

export function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <Body>{children}</Body>
        </html>
    );
}
