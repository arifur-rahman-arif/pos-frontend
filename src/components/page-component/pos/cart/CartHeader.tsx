import React from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import { TooltipWrapper } from '@/components/page-component';
import { BsCartX } from 'react-icons/bs';

/**
 * Cart header component
 * @returns {JSX.Element}
 * @constructor
 */
const CartHeader = () => {
    return (
        <Stack
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            sx={{
                pt: 1,
                pb: 2,
                px: 3
            }}
        >
            <Button variant="outlined" size="large">
                Table 24
            </Button>

            <TooltipWrapper title="Clear items from cart">
                <IconButton
                    sx={{
                        fontSize: '1.7rem',
                        padding: 2,
                        margin: '0 -16px 0 0',
                        color: (theme) => theme.palette.error.main
                    }}
                >
                    <BsCartX />
                </IconButton>
            </TooltipWrapper>
        </Stack>
    );
};

export default CartHeader;
