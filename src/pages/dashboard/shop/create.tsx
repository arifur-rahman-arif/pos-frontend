import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { Grid } from '@mui/material';
import { ShopCreate } from '@/components/shop';

export interface ShopTooltipInterface {
    registryNumber?: boolean;
    phone?: boolean;
    establishedDate?: boolean;
    currency?: boolean;
    workDays?: boolean;
    workingStartDay?: boolean;
    workingEndDay?: boolean;
}

/**
 * User create page to create a new user
 * @returns {JSX.Element}
 * @constructor
 */
const CreatePage: NextPage = () => {
    const siteName = `${SITE_NAME} > Create shop`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Create a shop" url="/dashboard/shops" />

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={10}>
                    <ShopCreate />
                </Grid>
            </Grid>
        </Page>
    );
};

export default CreatePage;
