import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';

/**
 * Products page for /dashboard/products url
 * @returns {JSX.Element}
 * @constructor
 */
const RoomsPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} > Rooms`;

    return (
        <Page title={siteName}>
            <h1>Room list page</h1>
        </Page>
    );
};

export default RoomsPage;
