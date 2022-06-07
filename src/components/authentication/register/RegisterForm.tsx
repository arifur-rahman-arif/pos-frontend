import { useState } from 'react';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

/**
 * Register form component
 * @returns {JSX.Element}
 * @constructor
 */
const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Toggle the show password button
     * @returns void
     */
    const handleShowPassword = () => setShowPassword((show) => !show);

    return (
        <form
            autoComplete="off"
            noValidate
            onSubmit={() => {
                return false;
            }}
        >
            <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField fullWidth label="First name" error={false} helperText="" />

                    <TextField fullWidth label="Last name" error={false} helperText="" />
                </Stack>

                <TextField fullWidth autoComplete="username" label="Username" error={false} helperText="" />

                <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email address"
                    error={false}
                    helperText=""
                />

                <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    <i
                                        className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
                                    ></i>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    error={false}
                    helperText=""
                />

                <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Confirm password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    <i
                                        className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
                                    ></i>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    error={false}
                    helperText=""
                />
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={false}
                style={{ marginTop: '1.5rem' }}
            >
                Register
            </LoadingButton>
        </form>
    );
};

export default RegisterForm;
