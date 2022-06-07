import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { TagList } from '@/components/product/tags';

/**
 * Categories page. URL: /dashboard/product/categories
 * @returns {JSX.Element}
 * @constructor
 */
const TagsPage: NextPage = () => {
    const siteName = `${SITE_NAME} > Products > tags`;

    return (
        <Page title={siteName}>
            <TagList />
        </Page>
    );
};

export default TagsPage;
