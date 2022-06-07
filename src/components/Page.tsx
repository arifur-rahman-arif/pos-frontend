// Material
import { Box } from '@mui/material';
import Head from 'next/head';

interface PageInterface {
    children?: JSX.Element | JSX.Element[];
    title: string;
}

/**
 * Page component which will be use in every page as a wrapper
 * This component will also set the page title in browsers
 * @param {JSX.Element | JSX.Element[] | undefined} children
 * @param {string} title
 * @param {Pick<PageInterface, never>} other
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, title = '', ...other }: PageInterface) => {
    return (
        <Box {...other}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </Box>
    );
};

export default Page;
