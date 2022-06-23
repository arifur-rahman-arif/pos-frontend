import { Card, CardContent, Stack, Typography } from '@mui/material';

/**
 * Fee section component
 * @returns {JSX.Element}
 * @constructor
 */
const FeeSection = () => {
    return (
        <Stack
            sx={{
                p: 2,
                mt: 'auto'
            }}
        >
            <Card>
                <CardContent>
                    <Stack direction="row" justifyContent="space-between" gap={2}>
                        <Typography variant="body1">Tax/VAT</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                            £15.99
                        </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between" gap={2}>
                        <Typography variant="body1">Service fee</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                            £20.99
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default FeeSection;
