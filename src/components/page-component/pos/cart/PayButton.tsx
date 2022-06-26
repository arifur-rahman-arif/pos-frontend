import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

/**
 * Pay button component
 * @returns {JSX.Element}
 * @constructor
 */
const PayButton = () => {
    return (
        <Stack
            sx={{
                px: 2,
                pb: 2
            }}
        >
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: '15px',
                    height: 60
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bolder', mr: 'auto' }}>
                    Pay
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bolder', ml: 'auto' }}>
                    £40
                </Typography>
            </Button>
        </Stack>
    );
};

export default PayButton;
