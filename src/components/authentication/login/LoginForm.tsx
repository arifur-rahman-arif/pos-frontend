import { useState } from 'react';
import Link from 'next/link';

import {
    Link as MUILink,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

/**
 * Login form component to show login form
 * @returns {JSX.Element}
 * @constructor
 */
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Toggle the show password field
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
                <TextField
                    fullWidth
                    autoComplete="username"
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
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={true}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 26
                                }
                            }}
                        />
                    }
                    onChange={() => true}
                    label="Keep me logged in"
                />
                <Link href="/forgot-password" passHref>
                    <MUILink underline="hover" variant="subtitle2" style={{ fontFamily: 'Work Sans' }}>
                        Forgot password
                    </MUILink>
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={false}>
                Login
            </LoadingButton>
        </form>
    );
};

export default LoginForm;
