import { Card, Container, Stack, Typography } from '@mui/material';
import { Link as MUILink } from '@material-ui/core';

import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SITE_NAME } from '@/utils/global';
import AuthLayout from '@/layouts/AuthLayout';
import { MHidden } from '@/components/@material-extend';
import Page from '@/components/Page';
import { AuthSocial } from '@/components/authentication';
import { RegisterForm } from '@/components/authentication/register';

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

/**
 * Register page for /register url
 * @returns {JSX.Element}
 * @constructor
 */
const RegisterPage = () => {
    const siteName = `${SITE_NAME} | Register`;

    return (
        <RootStyle title={siteName}>
            <AuthLayout>
                Already have an account? &nbsp;
                <Link href="/login" passHref>
                    <MUILink className="login_page_get_started_link" underline="hover">
                        Login
                    </MUILink>
                </Link>
            </AuthLayout>

            <MHidden width="mdDown">
                <SectionStyle className="login_side_logo">
                    <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 5 }} style={{ fontFamily: 'Poppins' }}>
                        Manage the job more effectively with Minimal
                    </Typography>

                    <img src="/static/illustrations/illustration_register.png" alt="login" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Poppins' }}>
                            Sign in to Minimal
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }} style={{ fontFamily: 'Work Sans' }}>
                            Enter your details below.
                        </Typography>
                    </Stack>
                    <AuthSocial />

                    <RegisterForm />

                    <Typography align="center" style={{ marginTop: '1rem' }}>
                        By registering, I agree to Minimal&nbsp;
                        <Link href="/terms-of-service" passHref>
                            <MUILink
                                className="login_page_get_started_link"
                                underline="hover"
                                style={{
                                    fontFamily: 'Work Sans'
                                }}
                            >
                                Terms of Service
                            </MUILink>
                        </Link>
                        &nbsp;and&nbsp;
                        <Link href="/privacy-policy" passHref>
                            <MUILink
                                className="login_page_get_started_link"
                                underline="hover"
                                style={{
                                    fontFamily: 'Work Sans'
                                }}
                            >
                                Privacy Policy
                            </MUILink>
                        </Link>
                    </Typography>

                    <MHidden width="smUp">
                        <Typography
                            variant="body2"
                            align="center"
                            style={{
                                fontFamily: 'Work Sans',
                                marginTop: '1rem'
                            }}
                        >
                            Don’t have an account?&nbsp;
                            <Link href="/register" passHref>
                                <MUILink
                                    className="login_page_get_started_link"
                                    underline="hover"
                                    style={{
                                        fontFamily: 'Work Sans'
                                    }}
                                >
                                    Get started
                                </MUILink>
                            </Link>
                        </Typography>
                    </MHidden>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};
// @ts-ignore
RegisterPage.layout = 'noNavigation';

export default RegisterPage;
