import ReCAPTCHA from 'react-google-recaptcha';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

/**
 * Forgot password form component
 * @returns {JSX.Element}
 * @constructor
 */
const ForgotPasswordFrom = () => {
    return (
        <form
            autoComplete="off"
            noValidate
            onSubmit={() => {
                return false;
            }}
        >
            <Stack spacing={3}>
                <TextField
                    style={{ zIndex: '0' }}
                    id="user-login"
                    className="full_width_input"
                    label="Enter your email"
                    variant="outlined"
                    helperText=""
                    error={false}
                    onChange={() => {}}
                />

                <ReCAPTCHA
                    className="captcha_field"
                    sitekey="6LdM68wdAAAAADwXStmlRy5puuZNu1Twe0ozsxe4"
                    onChange={() => {
                        return false;
                    }}
                />
            </Stack>

            <LoadingButton
                sx={{ my: 3 }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={false}
            >
                Send reset token
            </LoadingButton>
        </form>
    );
};

export default ForgotPasswordFrom;
