import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const slug = params.slug ? params.slug.join('/') : '';
    const res = await fetch(`https://blog.oneclickhuman.com/${slug}`);
    const html = await res.text();
    return new NextResponse(html, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
