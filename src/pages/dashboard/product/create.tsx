import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { Grid } from '@mui/material';
import { CreateProductLeftSection, CreateProductRightSection } from '@/components/product';

/**
 * Product creation page to create a new product
 * @returns {JSX.Element}
 * @constructor
 */
const CreatePage: NextPage = () => {
    const siteName = `${SITE_NAME} > Create product`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Create a product" url="/dashboard/products" />

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={12} md={8} lg={7}>
                    <CreateProductLeftSection />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={5}>
                    <CreateProductRightSection />
                </Grid>
            </Grid>
        </Page>
    );
};

export default CreatePage;
