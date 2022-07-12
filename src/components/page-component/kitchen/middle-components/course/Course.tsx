import { Card, CardContent, Stack, Typography } from '@mui/material';

/**
 * Course component for preparation list of kitchen
 * @constructor
 */
const Course = () => {
    return (
        <Card>
            <CardContent
                sx={{
                    p: 2,
                    paddingBottom: '16px !important'
                }}
            >
                <Stack
                    sx={{
                        mb: 1
                    }}
                >
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Course name
                    </Typography>
                </Stack>

                <Typography variant="body2" maxWidth={500}>
                    Lorem ipsum dolor sit amount in nonnegative or positive form of text that is not exactly
                    the same as the current
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Course;
