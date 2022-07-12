import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { FaTimes } from 'react-icons/fa';

/**
 * Waiting item cart for kitchen waiting list
 * @returns {JSX.Element}
 * @constructor
 */
const WaitingItem = () => {
    return (
        <Card
            sx={{
                boxShadow: (theme) => theme.shadows[8]
            }}
        >
            <CardContent
                sx={{
                    py: 1,
                    px: 2,
                    paddingBottom: '8px !important',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body2">Item name</Typography>

                <Stack gap={1} direction="row" alignItems="center">
                    <IconButton
                        sx={{
                            fontSize: '0.8rem',
                            pointerEvents: 'none',
                            mr: -1.8,
                            mt: 0.2
                        }}
                    >
                        <FaTimes />
                    </IconButton>

                    <Typography variant="body2" sx={{ fontWeight: 'bolder' }}>
                        2
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default WaitingItem;
