import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import { Grid } from '@mui/material';
import { CreateTag } from '@/components/product';

/**
 * Product tag edit page to create an edit an existing tag
 * @returns {JSX.Element}
 * @constructor
 */
const TagPage: NextPage = () => {
    const siteName = `${SITE_NAME} > Product > Edit category`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Edit a tag" url="/dashboard/product/tags" />

            <Grid container spacing={3} justifyContent="flex-start">
                <Grid item xs={12} sm={12} md={10} lg={8}>
                    <CreateTag editPage />
                </Grid>
            </Grid>
        </Page>
    );
};

export default TagPage;
