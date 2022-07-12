import { Stack } from '@mui/material';
import WaitingCard from './WaitingCard';
import { Box } from '@mui/system';
import { Scrollbar } from '@/components/scrollbar';
import React from 'react';

/**
 * Waiting list component
 * @returns {JSX.Element}
 * @constructor
 */
const WaitingComponent = () => {
    return (
        <Box
            sx={{
                maxHeight: 'calc(100vh - 200px)',
                ml: -2,
                width: '100%'
            }}
        >
            <Scrollbar
                sx={{
                    '& .simplebar-content': {
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    px: 2,
                    pb: 3
                }}
            >
                <Stack gap={3}>
                    <WaitingCard />

                    <WaitingCard />

                    <WaitingCard />
                </Stack>
            </Scrollbar>
        </Box>
    );
};

export default WaitingComponent;
