import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { Grid } from '@mui/material';
import { CategoryImageUploader, CreateCategory } from '@/components/product';

/**
 * Product creation page to create a new product
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryPage: NextPage = () => {
    const siteName = `${SITE_NAME} > Product > Create category`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Edit a category" url="/dashboard/product/categories" />

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={12} md={10} lg={4}>
                    <CategoryImageUploader />
                </Grid>

                <Grid item xs={12} sm={12} md={10} lg={8}>
                    <CreateCategory editPage />
                </Grid>
            </Grid>
        </Page>
    );
};

export default CategoryPage;
