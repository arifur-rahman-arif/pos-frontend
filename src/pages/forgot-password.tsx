import { Card, Stack, Container, Typography } from '@mui/material';
import { Link as MUILink } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SITE_NAME } from '@/utils/global';
import AuthLayout from '../layouts/AuthLayout';
import { MHidden } from '../components/@material-extend';
import Page from '../components/Page';
import { ForgotPasswordFrom } from '../components/authentication/forgotPassword';
import Lottie, { Options } from 'react-lottie';
import * as animationData from '../../public/static/lottie-animations/16766-forget-password-animation.json';
import { NextPage } from 'next';

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
    minHeight: '820px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

const lottieOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData
};

/**
 * Lottie animation component to animation lottie json file
 * @returns {JSX.Element}
 * @constructor
 */
const LottieAnimation = () => {
    return (
        <Lottie
            options={lottieOptions}
            speed={2}
            title="Forgot password"
            style={{ width: '400px', height: '400px' }}
        />
    );
};

/**
 * User page for /forgot-password url
 * @returns {JSX.Element}
 * @constructor
 */
const ForgotPasswordPage: NextPage = () => {
    const siteName = `${SITE_NAME} | Login`;

    return (
        <RootStyle title={siteName}>
            <AuthLayout>
                Don’t have an account? &nbsp;
                <Link href="/register" passHref>
                    <MUILink className="login_page_get_started_link" underline="hover">
                        Get started
                    </MUILink>
                </Link>
            </AuthLayout>

            <MHidden width="mdDown">
                <SectionStyle className="login_side_logo">
                    <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 9 }} style={{ fontFamily: 'Poppins' }}>
                        Forgot your password?
                    </Typography>

                    <LottieAnimation />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Poppins' }}>
                            Restore your password
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }} style={{ fontFamily: 'Work Sans' }}>
                            Enter your email address to get a password reset token
                        </Typography>
                    </Stack>

                    <ForgotPasswordFrom />

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
ForgotPasswordPage.layout = 'noNavigation';

export default ForgotPasswordPage;
