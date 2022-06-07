import { Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Link from 'next/link';
import MotionContainer from '@/animate/MotionContainer';
import { varBounceIn } from '@/animate/variants/bounce/BounceIn';
import Page from '@/components/Page';
import { NextPage } from 'next';

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

/**
 * 404 page of the system
 * @returns {JSX.Element}
 * @constructor
 */
const Page404: NextPage = () => {
    return (
        <RootStyle title="404">
            <Container>
                <MotionContainer open>
                    <Box
                        sx={{
                            maxWidth: 480,
                            margin: 'auto',
                            textAlign: 'center'
                        }}
                    >
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h3" paragraph={false}>
                                Sorry, page not found!
                            </Typography>
                        </motion.div>
                        <Typography sx={{ color: 'text.secondary' }} marginTop={'1rem'}>
                            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the
                            URL? Be sure to check your spelling.
                        </Typography>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src="/static/illustrations/illustration_404.svg"
                                sx={{
                                    height: 260,
                                    mx: 'auto',
                                    my: {
                                        xs: 5,
                                        sm: 10
                                    }
                                }}
                            />
                        </motion.div>

                        <Link href="/login" passHref>
                            <Button variant="contained">Back to Home</Button>
                        </Link>
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
};

// @ts-ignore
Page404.layout = 'noNavigation';

export default Page404;
