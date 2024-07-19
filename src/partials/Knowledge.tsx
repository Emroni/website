import { Block, Link, Section, Transition } from 'components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    blocks: {
        display: 'grid',
        gap: '1em',
        margin: '0 -1em 1em',
        [theme.media.sm]: {
            gap: '1.5em',
            margin: '0 -1.25em 1.5em',
        },
        [theme.media.md]: {
            gap: '2em',
            margin: '0 -1.5em 2em',
        },
    },
}));

export default function Knowledge() {

    return <Section heading="Technical Knowledge">
        <Transition className="-mx-4 space-y-4 sm:-mx-5 sm:space-y-6 md:-mx-6 md:space-y-8" fade={false} stall={0.5}>
            <Block title="Extensive" items="JavaScript,TypeScript,PHP,HTML,CSS,SQL,React,Symfony,WordPress,Node.js,REST APIs,Generators,Three.js,GSAP,Charts,D3.js,Next.js,Automation,Motion Design,Data visualization"/>
            <Block title="Proficient" items="Tailwind,Bootstrap,Storybook,Jest,D3.js,Pixi.js,Redux,Charts.js,OpenAPI,Swagger,Twig,Blade,Websockets,OpenAPI,Swagger,GraphQL,Mock Servic Worker,Scrapers,Azure Functions,Laravel,Nginx,Apache,GitHub Actions,Docker,Deployer,Travis CI,Sketch,Figma ,Photoshop ,Illustrator,After effects" />
        </Transition>
        <Transition className="mt-4 sm:mt-6 md:mt-8" tag="p">
            <Link href="/assets/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
        </Transition>
    </Section>;

}