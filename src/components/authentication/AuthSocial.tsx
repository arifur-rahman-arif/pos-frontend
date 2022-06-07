import { Stack, Button, Divider, Typography } from '@mui/material';

/**
 * Social button wrapper component
 * @returns {JSX.Element}
 * @constructor
 */
const AuthSocial = () => {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button
                    fullWidth
                    size="large"
                    color="inherit"
                    variant="outlined"
                    style={{
                        color: 'rgb(223, 62, 48)',
                        fontSize: 'calc(8px + 2vmin)'
                    }}
                >
                    <i className="fa-brands fa-google"></i>
                </Button>
                <Button
                    fullWidth
                    size="large"
                    color="inherit"
                    variant="outlined"
                    style={{
                        color: 'rgb(24, 119, 242)',
                        fontSize: 'calc(8px + 2vmin)'
                    }}
                >
                    <i className="fa-brands fa-facebook-f"></i>
                </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    OR
                </Typography>
            </Divider>
        </>
    );
};

export default AuthSocial;
