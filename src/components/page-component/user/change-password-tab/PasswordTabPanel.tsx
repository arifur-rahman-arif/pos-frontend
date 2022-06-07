import { Button, Card, CardContent, Grid, TextField } from '@mui/material';

/**
 * Password tab panel for user account
 * @constructor
 * @returns {JSX.Element}
 */
const PasswordTabPanel = () => {
    return (
        <Card
            sx={{
                maxWidth: '900px'
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="old-password"
                            name="old-password"
                            type="password"
                            label="Old password"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="new-password"
                            name="new-password"
                            type="password"
                            label="New password"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            fullWidth
                            autoComplete="confirm-password"
                            name="confirm-password"
                            type="password"
                            label="Confirm password"
                            error={false}
                            helperText=""
                        />
                    </Grid>
                </Grid>

                {/* Submit button */}
                <Button
                    size="medium"
                    variant="contained"
                    sx={{ fontSize: '1rem', alignSelf: 'flex-end', mt: 3 }}
                >
                    Save changes
                </Button>
            </CardContent>
        </Card>
    );
};
export default PasswordTabPanel;
