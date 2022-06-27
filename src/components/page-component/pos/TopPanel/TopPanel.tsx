import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Box } from '@mui/system';
import Link from 'next/link';
import { BsCloudCheck } from 'react-icons/bs';
import { MdSync } from 'react-icons/md';
import React from 'react';
import ProductSearch from './ProductSearch';

/**
 * Top panel of Pos page
 * @returns {JSX.Element}
 * @constructor
 */
const TopPanel = () => {
    /**
     * Reload the page on click event
     */
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap'
            }}
        >
            <Link href="/src/pages">
                <Card sx={{ float: 'right' }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px !important',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexWrap: 'wrap'
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
                                p: 0,
                                ml: 2
                            }}
                        >
                            <FaLongArrowAltRight />
                        </IconButton>
                    </CardContent>
                </Card>
            </Link>

            <Box>
                <Card sx={{ float: 'right' }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '15px !important',
                            gap: 1,
                            flexWrap: 'wrap'
                        }}
                    >
                        <ProductSearch />

                        <IconButton
                            onClick={refreshPage}
                            sx={{
                                fontSize: '2rem'
                            }}
                        >
                            <MdSync />
                        </IconButton>

                        <IconButton
                            sx={{
                                fontSize: '2rem',
                                pointerEvents: 'none',
                                color: (theme) => theme.palette.primary.main
                            }}
                        >
                            <BsCloudCheck />
                        </IconButton>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default TopPanel;
