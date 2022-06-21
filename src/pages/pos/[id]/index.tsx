import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';

/**
 * Single product page to edit or view the product details in depth
 * @returns {JSX.Element}
 * @constructor
 */
const PosPage: NextPage = () => {
    const siteName = `${SITE_NAME} | POS`;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('homePageActive'));
    }, []);

    return (
        <Page title={siteName}>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt.
                Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
                odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
                Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus
                vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </Page>
    );
};

// @ts-ignore
PosPage.layout = 'posNavigation';

export default PosPage;
