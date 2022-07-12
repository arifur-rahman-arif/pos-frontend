import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { TbBrandAirtable } from 'react-icons/tb';
import { TooltipWrapper } from '@/components/page-component';
import WaitingItem from './WaitingItem';

/**
 * Waiting list cart to show waiting course and its items
 * @returns {JSX.Element}
 * @constructor
 */
const WaitingCard = () => {
    return (
        <Card>
            <CardContent
                sx={{
                    p: 2,
                    paddingBottom: '16px !important'
                }}
            >
                {/* Course name and its assigned table component */}
                <Stack gap={3} alignItems="center" direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ fontWeight: 'bolder' }}>
                        Course name
                    </Typography>

                    <Stack direction="row" alignItems="center">
                        <TooltipWrapper title="Assigned table for this course">
                            <IconButton sx={{ fontSize: '1.5rem', ml: -1 }}>
                                <TbBrandAirtable />
                            </IconButton>
                        </TooltipWrapper>
                        <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                            24
                        </Typography>
                    </Stack>
                </Stack>

                <Typography variant="body2" sx={{ mt: 1 }}>
                    Order: 345
                </Typography>

                {/* Course items */}
                <Stack gap={2} sx={{ mt: 1 }} alignItems="stretch" flex-wrap="wrap">
                    <WaitingItem />

                    <WaitingItem />

                    <WaitingItem />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default WaitingCard;
