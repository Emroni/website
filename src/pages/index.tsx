import { Button } from '@/components';
import Head from 'next/head';

export default function Home() {

    return <>
        <Head>
            <title>Emre Koc - Full Stack Developer</title>
        </Head>
        <main>
            <h1>Home 1</h1>
            <h2>Home 2</h2>
            <h3>Home 3</h3>
            <p>Home</p>
            <Button>Button</Button>
        </main>
    </>;

}