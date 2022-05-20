import { Block, Section, Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    blocks: {
        margin: '2em -1em',
        [theme.media.sm]: {
            margin: '2em -1.5em',
        },
        [theme.media.md]: {
            margin: '2em -2em',
        },
    },
}));

export default function Knowledge() {

    const classes = useStyles();

    return <Section heading="Technical Knowledge">
        <Trans className={classes.blocks} fade={false} stall={0.5}>
            <Block title="Extensive" items="JavaScript,TypeScript,PHP,HTML,CSS,SQL,React,Symfony,WordPress,Node.js,REST APIs,Generators,Three.js,GSAP,Charts,D3.js,Next.js,Automation,Motion Design,Data visualization"/>
            <Block title="Proficient" items="Tailwind,Bootstrap,Storybook,Jest,D3.js,Pixi.js,Redux,Charts.js,OpenAPI,Swagger,Twig,Blade,Websockets,OpenAPI,Swagger,GraphQL,Mock Servic Worker,Scrapers,Azure Functions,Laravel,Nginx,Apache,GitHub Actions,Docker,Deployer,Travis CI,Sketch,Figma ,Photoshop ,Illustrator,After effects" />
        </Trans>
    </Section>;

}