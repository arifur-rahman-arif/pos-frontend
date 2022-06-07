import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { CreateCoupon } from '@/components/coupon';

/**
 * Product creation page to create a new product
 * @returns {JSX.Element}
 * @constructor
 */
const CreatePage: NextPage = () => {
    const siteName = `${SITE_NAME} > Create coupon`;

    return (
        <Page title={siteName}>
            <CreateCoupon />
        </Page>
    );
};

export default CreatePage;
