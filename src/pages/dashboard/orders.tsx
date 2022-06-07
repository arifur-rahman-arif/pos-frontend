import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { OrderList } from '@/components/order';

/**
 * Products page for /dashboard/orders url
 * @returns {JSX.Element}
 * @constructor
 */
const OrdersPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} > Orders`;

    return (
        <Page title={siteName}>
            <OrderList />
        </Page>
    );
};

export default OrdersPage;
