import React from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { MdOutlineTouchApp } from 'react-icons/md';
import { TooltipWrapper } from '@/components/page-component';

/**
 * InteractiveComponent for changing the interractivity of of the kitchen screen.
 * @returns {JSX.Element}
 * @constructor
 */
const InteractiveComponent = () => {
    return (
        <Stack>
            <Card>
                <CardContent
                    sx={{
                        p: 2,
                        paddingBottom: '16px !important'
                    }}
                >
                    <TooltipWrapper title="Interactive mode of the kitchen">
                        <IconButton
                            sx={{
                                fontSize: '2rem',
                                color: (theme) => theme.palette.primary.main
                            }}
                        >
                            <MdOutlineTouchApp />
                        </IconButton>
                    </TooltipWrapper>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default InteractiveComponent;
