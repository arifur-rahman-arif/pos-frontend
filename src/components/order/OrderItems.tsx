import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import GeneralDetails from './GeneralDetails';
import BillingDetails from './BillingDetails';
import ShippingDetails from './ShippingDetails';

/**
 * Order details component of an order
 * @returns {JSX.Element}
 * @constructor
 */
const OrderItems = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <GeneralDetails />
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderItems;
