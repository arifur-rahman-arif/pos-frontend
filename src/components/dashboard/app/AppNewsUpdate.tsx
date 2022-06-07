import Link from 'next/link';
import { Box, Stack, Link as MUILink, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import { mockImgCover } from '@/utils/mockImages';
import { Scrollbar } from '../../scrollbar';
import { HiArrowNarrowRight } from 'react-icons/hi';

const NEWS = [...Array(5)].map((_, index) => {
    const setIndex = index + 1;
    return {
        title: 'Hello world',
        description: `And he wants to go. He's the most worthy and but not soothes.
             I hate the pleasures of the game. 
             They are bound to encounter the enduring pleasures of the present`,
        image: mockImgCover(setIndex),
        postedAt: 5
    };
});

// ----------------------------------------------------------------------

interface NewsItemInterface {
    news: {
        image: string;
        title: string;
        description: string;
        postedAt: number | Date;
    };
}

/**
 * News item component for dashboard page
 * @param {NewsItemInterface} news
 * @returns {JSX.Element}
 * @constructor
 */
const NewsItem = ({ news }: NewsItemInterface) => {
    const { image, title, description } = news;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" alt="hello" src={image} sx={{ width: 48, height: 48, borderRadius: 1.5 }} />
            <Box sx={{ minWidth: 240 }}>
                <Link href="/" passHref>
                    <MUILink underline="hover" style={{ fontFamily: 'Work Sans' }}>
                        <Typography noWrap>{title}</Typography>
                    </MUILink>
                </Link>

                <Typography variant="body1" sx={{ color: 'text.secondary' }} noWrap>
                    {description}
                </Typography>
            </Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                about 15 hours ago
            </Typography>
        </Stack>
    );
};

/**
 * New update component
 * @returns {JSX.Element}
 * @constructor
 */
const AppNewsUpdate = () => {
    return (
        <Card>
            <CardHeader title="News Update" />

            <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                    {NEWS.map((news, index) => (
                        <NewsItem key={index} news={news} />
                    ))}
                </Stack>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Link href="/">
                    <Button size="small" color="inherit" endIcon={<HiArrowNarrowRight />}>
                        View all
                    </Button>
                </Link>
            </Box>
        </Card>
    );
};

export default AppNewsUpdate;
