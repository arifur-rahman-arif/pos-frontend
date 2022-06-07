import { Button, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import React from 'react';

/**
 * User navigation component of user route
 * @param {string} title
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
export const ListTopNavigation = ({ title, url }: { title: string; url: string }): JSX.Element => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4">{title}</Typography>

            <Link href={url} passHref>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '10px',
                        whiteSpace: 'no-wrap',
                        fontSize: '1rem'
                    }}
                >
                    <IconButton
                        sx={{
                            fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                            color: 'inherit',
                            p: 0
                        }}
                    >
                        <BiArrowBack />
                    </IconButton>
                    Go back
                </Button>
            </Link>
        </Stack>
    );
};
