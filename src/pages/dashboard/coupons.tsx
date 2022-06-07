import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { CouponList } from '@/components/coupon';

/**
 * Products page for /dashboard/coupons url
 * @returns {JSX.Element}
 * @constructor
 */
const CouponsPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} > Coupons`;

    return (
        <Page title={siteName}>
            <CouponList />
        </Page>
    );
};

export default CouponsPage;
