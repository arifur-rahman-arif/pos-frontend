import React from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { AiOutlineDoubleRight } from 'react-icons/ai';

/**
 * Pay button component
 * @returns {JSX.Element}
 * @constructor
 */
const PayButton = () => {
    return (
        <Stack
            sx={{
                p: 2
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
