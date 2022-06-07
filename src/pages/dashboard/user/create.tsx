import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { Grid } from '@mui/material';
import { UserCreateForm, UserPhotoUpload } from '@/components/card';
import React from 'react';
import { ListTopNavigation } from '@/components/page-component/list-navigation';

/**
 * User create page to create a new user
 * @returns {JSX.Element}
 * @constructor
 */
const CreatePage: NextPage = () => {
    const siteName = `${SITE_NAME} | Create user`;

    return (
        <Page title={siteName}>
            <ListTopNavigation title="Create a user" url="/dashboard/users" />

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={8} lg={4}>
                    <UserPhotoUpload />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <UserCreateForm />
                </Grid>
            </Grid>
        </Page>
    );
};

export default CreatePage;
