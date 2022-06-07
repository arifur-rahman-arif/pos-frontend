// Import { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';

// import TextField from '@mui/material/TextField';
// import LoadingButton from '@mui/lab/LoadingButton';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from 'next/link';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import ReCAPTCHA from 'react-google-recaptcha';

// import { useFacebookLoginMutation, useGoogleLoginMutation, useLoginMutation } from '../../services/auth';
// import { useDispatch } from 'react-redux';
// import { handleAlert } from '../../features/alert/alertSlice';
// import { validateEmail } from '../../global';
// import { useRouter } from 'next/router';
// import Page from '../Page';

// interface ReqBodyInterface {
//     password: string;
//     keepMeLoggedIn: boolean;
//     email?: string;
//     userName?: string;
// }

// const Login = () => {
//     const router = useRouter();
//     // Login form state
//     const [userLogin, setUserLogin] = useState<string>('');
//     const [userPassword, setUserPassword] = useState<string>('');
//     const [keepMeLoggedIn, setKeepMeLoggedIn] = useState<boolean>(true);
//     const [captchaOk, setCaptchaOk] = useState<boolean>(false);

//     const [showLoginError, setShowLoginError] = useState<boolean>(false);
//     const [showLoginPasswordError, setShowLoginPasswordError] = useState<boolean>(false);

//     const dispatch = useDispatch();

//     // All ajax req here
//     const [loginCaller, loginArgs]: any = useLoginMutation();
//     const [googleLoginCaller, googleLoginArgs]: any = useGoogleLoginMutation();
//     const [facebookLoginCaller, facebookLoginArgs]: any = useFacebookLoginMutation();

//     // Normal Login hook for any api response from backend
//     useEffect(() => {
//         if (loginArgs.isError) {
//             dispatch(
//                 handleAlert({
//                     showAlert: true,
//                     alertType: 'error',
//                     alertMessage: loginArgs.error.data.message
//                 })
//             );
//         }
//     }, [loginArgs, dispatch]);

//     // Google login hook for any api response from backend
//     useEffect(() => {
//         if (googleLoginArgs.isError) {
//             dispatch(
//                 handleAlert({
//                     showAlert: true,
//                     alertType: 'error',
//                     alertMessage: googleLoginArgs.error.data.message
//                 })
//             );
//         }
//     }, [googleLoginArgs, dispatch]);

//     // Facebook login hook for any api response from backend
//     useEffect(() => {
//         if (facebookLoginArgs.isError) {
//             dispatch(
//                 handleAlert({
//                     showAlert: true,
//                     alertType: 'error',
//                     alertMessage: facebookLoginArgs.error.data.message
//                 })
//             );
//         }
//     }, [facebookLoginArgs, dispatch]);

//     const loginSubmit = (e: any) => {
//         e.preventDefault();

//         if (!userLogin || userLogin.length < 1) {
//             setShowLoginError(true);
//             return;
//         } else {
//             setShowLoginError(false);
//         }

//         if (!userPassword || userPassword.length < 1) {
//             setShowLoginPasswordError(true);
//             return;
//         } else {
//             setShowLoginPasswordError(false);
//         }

//         const reqBody: ReqBodyInterface = {
//             password: userPassword,
//             keepMeLoggedIn
//         };

//         if (userLogin.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
//             if (!validateEmail(userLogin)) {
//                 dispatch(
//                     handleAlert({
//                         showAlert: true,
//                         alertType: 'warning',
//                         alertMessage: 'Please provide a valid email address'
//                     })
//                 );
//                 return;
//             }

//             reqBody.email = userLogin;
//         } else {
//             reqBody.userName = userLogin;
//         }

//         if (!captchaOk) {
//             dispatch(
//                 handleAlert({
//                     showAlert: true,
//                     alertType: 'warning',
//                     alertMessage: 'Please validate the captcha field'
//                 })
//             );
//             return;
//         }

//         loginCaller(reqBody);
//     };

// const responseGoogle = (response: any) => {
//     let tokenId = response?.tokenId;

//     if (tokenId) {
//         googleLoginCaller({
//             tokenId
//         });
//     } else {
//         dispatch(
//             handleAlert({
//                 showAlert: true,
//                 alertType: 'error',
//                 alertMessage: 'Invalid authentication detected'
//             })
//         );
//     }
// };

// const googleErrorResponse = (error: any) => {
//     dispatch(
//         handleAlert({
//             showAlert: true,
//             alertType: 'error',
//             alertMessage: error.details
//         })
//     );
//     console.error(error);
// };

// const facebookResponse = (response: any) => {
//     const { accessToken, email, userID, name, picture } = response;

//     if (
//         !accessToken ||
//         typeof accessToken !== 'string' ||
//         !email ||
//         typeof email !== 'string' ||
//         !userID ||
//         typeof userID !== 'string' ||
//         !name ||
//         typeof name !== 'string' ||
//         !picture ||
//         typeof picture !== 'object'
//     ) {
//         dispatch(
//             handleAlert({
//                 showAlert: true,
//                 alertType: 'error',
//                 alertMessage: 'Missing 1 or more required fields'
//             })
//         );
//         return;
//     }

//     facebookLoginCaller(response);
// };

// const facebookErrorResponse = (error: any) => {
//     dispatch(
//         handleAlert({
//             showAlert: true,
//             alertType: 'error',
//             alertMessage: 'Facebook login process exited'
//         })
//     );
// };

// const captchaOnChange = (val: any) => {
//     if (val && val != null) {
//         setCaptchaOk(true);
//     }
// };

//     return (
//         <>
//             {loginArgs.isSuccess && router.push('/dashboard')}
//             {googleLoginArgs.isSuccess && router.push('/dashboard')}
//             {facebookLoginArgs.isSuccess && router.push('/dashboard')}

//             <div className="login">
//                 <label className="label" htmlFor="chk" aria-hidden="true">
//                     Login
//                 </label>
//                 <form onSubmit={loginSubmit} className="login_form" noValidate autoComplete="on">
//                     <TextField
//                         style={{ zIndex: '0' }}
//                         id="userlogin"
//                         className="full_width_input"
//                         label="Username/Email"
//                         variant="outlined"
//                         helperText={showLoginError ? 'Username or email is required' : ''}
//                         error={showLoginError}
//                         onChange={(e) => {
//                             setUserLogin(e.target.value);
//                             setShowLoginError(false);
//                         }}
//                     />
//                     <TextField
//                         style={{ zIndex: '0' }}
//                         id="password"
//                         className="full_width_input"
//                         type="password"
//                         label="Password"
//                         variant="outlined"
//                         helperText={showLoginPasswordError ? 'Password is required' : ''}
//                         error={showLoginPasswordError}
//                         onChange={(e) => {
//                             setUserPassword(e.target.value);
//                             setShowLoginPasswordError(false);
//                         }}
//                     />

//                     <div className="full_width">
// <FormControlLabel
//     control={
//         <Checkbox
//             checked={keepMeLoggedIn}
//             sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
//         />
//     }
//     onChange={() => setKeepMeLoggedIn(!keepMeLoggedIn)}
//     label="Keep me logged in"
// />

//                         <Link href="/forgot-password" passHref>
//                             <MUILink underline="hover">Forgot password</MUILink>
//                         </Link>
//                     </div>

//                     <ReCAPTCHA
//                         sitekey="6LdM68wdAAAAADwXStmlRy5puuZNu1Twe0ozsxe4"
//                         onChange={captchaOnChange}
//                     />

//                     <LoadingButton
//                         type="submit"
//                         loading={loginArgs.isLoading}
//                         disabled={loginArgs.isLoading}
//                         variant="contained"
//                         className="login_btn"
//                     >
//                         Login
//                     </LoadingButton>

//                     <div className="social_login">
// <GoogleLogin
//     className="google_login"
//     clientId="573219645067-al3gofbi4esbs3vusmhbc4mohl3s0sh4.apps.googleusercontent.com"
//     buttonText="Google"
//     onSuccess={responseGoogle}
//     onFailure={googleErrorResponse}
//     cookiePolicy={'single_host_origin'}
// />

// <span>
//     <FacebookLogin
//         cssClass="facebook_login"
//         appId="447916660214139"
//         autoLoad={false}
//         icon="fab fa-facebook-square"
//         textButton="Facebook"
//         fields="name,email,picture"
//         callback={facebookResponse}
//         onFailure={facebookErrorResponse}
//     />
// </span>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default Login;

import { Card, Stack, Container, Typography } from '@mui/material';
import { Link as MUILink } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SITE_NAME } from '@/utils/global';
import AuthLayout from '@/layouts/AuthLayout';
import { MHidden } from '@/components/@material-extend';
import Page from '@/components/Page';
import { AuthSocial, LoginForm } from '@/components/authentication';

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
 * Login page for /login url
 * @returns {JSX.Element}
 * @constructor
 */
const LoginPage = () => {
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
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }} style={{ fontFamily: 'Poppins' }}>
                        Hi, Welcome Back
                    </Typography>

                    <img src="/static/illustrations/illustration_login.png" alt="login" />
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

                    <LoginForm />

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
LoginPage.layout = 'noNavigation';

export default LoginPage;
