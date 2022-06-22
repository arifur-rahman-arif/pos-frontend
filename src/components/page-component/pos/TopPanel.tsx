import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Box } from '@mui/system';
import Link from 'next/link';

/**
 * Top panel of Pos page
 * @returns {JSX.Element}
 * @constructor
 */
const TopPanel = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
                <Link href="/">
                    <Card sx={{ maxWidth: 350, cursor: 'pointer' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '15px !important'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}
                                >
                                    Last order
                                </Typography>
                                <Typography
                                    sx={{ color: '#F2345E', fontSize: '1.1rem', fontWeight: 'bolder', mx: 1 }}
                                >
                                    JUST EAT
                                </Typography>{' '}
                                20 min ago
                            </Box>
                            <IconButton
                                sx={{
                                    p: 0
                                }}
                            >
                                <FaLongArrowAltRight />
                            </IconButton>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </Grid>
    );
};

export default TopPanel;
