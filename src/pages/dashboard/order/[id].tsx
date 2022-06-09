import React from 'react';
import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { OrderDetails, OrderItemList } from '@/components/order';
import { Grid } from '@mui/material';
import OrderTotals from '@/components/order/OrderTotals';

/**
 * Single product page to edit or view the product details in depth
 * @returns {JSX.Element}
 * @constructor
 */
const OrderPage: NextPage = () => {
    const siteName = `${SITE_NAME} | Product details`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Order #345 details" url="/dashboard/orders" />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <OrderDetails />
                </Grid>

                <Grid item xs={12} md={7}>
                    <OrderItemList />
                </Grid>

                <Grid item xs={12} md={5}>
                    <OrderTotals />
                </Grid>
            </Grid>
        </Page>
    );
};

export default OrderPage;
