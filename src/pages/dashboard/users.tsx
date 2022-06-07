import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { UserList } from '@/components/user-list';

/**
 * User page for /dashboard/user url
 * @returns {JSX.Element}
 * @constructor
 */
const UsersPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} | Users`;

    return (
        <Page title={siteName}>
            <UserList />
        </Page>
    );
};

export default UsersPage;
