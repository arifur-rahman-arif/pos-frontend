import ReCAPTCHA from 'react-google-recaptcha';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import React from 'react';

/**
 * Resert password form for password resetting
 * @returns {JSX.Element}
 * @constructor
 */
const ResetPasswordForm = () => {
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
                    id="password"
                    label="New password"
                    variant="outlined"
                    helperText={false ? 'Password is required' : ''}
                    error={false}
                    type="password"
                    onChange={(e) => {}}
                />

                <TextField
                    style={{ zIndex: '0' }}
                    id="confirm-password"
                    label="Confirm password"
                    variant="outlined"
                    helperText={false ? 'Password needs to be same' : ''}
                    error={false}
                    type="password"
                    onChange={(e) => {}}
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
                Reset password
            </LoadingButton>
        </form>
    );
};

export default ResetPasswordForm;
