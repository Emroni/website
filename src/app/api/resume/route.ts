import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
    // Launch Puppeteer
    const browser = await puppeteer.launch({
        args: ['--disable-setuid-sandbox', '--no-sandbox'],
        headless: true,
    });

    const page = await browser.newPage();

    // Load resume page
    await page.goto('http://localhost:3000/resume/preview', {
        waitUntil: 'networkidle0',
    });

    // Generate PDF
    const pdf = await page.pdf({
        format: 'Letter',
        pageRanges: '1-2',
        printBackground: true,
    });

    await browser.close();

    // Return PDF
    return new NextResponse(Buffer.from(pdf), {
        headers: {
            'Content-Disposition': 'attachment; filename="Emre Koc Resume.pdf"',
            'Content-Type': 'application/pdf',
        },
    });
}
