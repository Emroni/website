'use client';
import { Body } from './Layout.styled';

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <Body>{children}</Body>
        </html>
    );
}
