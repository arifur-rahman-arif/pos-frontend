import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';

/**
 * Products page for /dashboard/tables url
 * @returns {JSX.Element}
 * @constructor
 */
const TablesPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} > Tables`;

    return (
        <Page title={siteName}>
            <h1>Table list page</h1>
        </Page>
    );
};

export default TablesPage;
