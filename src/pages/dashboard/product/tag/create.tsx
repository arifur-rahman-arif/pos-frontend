import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { Grid } from '@mui/material';
import { CreateTag } from '@/components/product';

/**
 * Product creation page to create a new product
 * @returns {JSX.Element}
 * @constructor
 */
const CreatePage: NextPage = () => {
    const siteName = `${SITE_NAME} > Product > Create category`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Create a tag" url="/dashboard/product/tags" />

            <Grid container spacing={3} justifyContent="flex-start">
                <Grid item xs={12} sm={12} md={10} lg={8}>
                    <CreateTag />
                </Grid>
            </Grid>
        </Page>
    );
};

export default CreatePage;
