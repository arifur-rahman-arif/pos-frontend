import React from 'react';
import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { ListTopNavigation } from '@/components/page-component/list-navigation';

/**
 * Single product page to edit or view the product details in depth
 * @returns {JSX.Element}
 * @constructor
 */
const ProductPage: NextPage = () => {
    const siteName = `${SITE_NAME} | Product details`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Product details" url="/dashboard/products" />
        </Page>
    );
};

export default ProductPage;
