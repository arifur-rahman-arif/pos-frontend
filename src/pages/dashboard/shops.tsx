import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { ShopList } from '@/components/shop';

/**
 * Products page for /dashboard/shops url
 * @returns {JSX.Element}
 * @constructor
 */
const ShopsPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} > Shops`;

    return (
        <Page title={siteName}>
            <ShopList />
        </Page>
    );
};

export default ShopsPage;
