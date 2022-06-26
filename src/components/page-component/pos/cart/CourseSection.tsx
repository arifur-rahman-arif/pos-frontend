import React from 'react';
import { Card, CardContent, Collapse, Grid, IconButton, Stack, Typography } from '@mui/material';
import { AiFillCaretDown, AiFillCaretRight, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';

/**
 * Course section of Cart
 * @returns {JSX.Element}
 * @constructor
 */
const CourseSection = () => {
    return (
        <Stack
            sx={{
                px: 3,
                pb: 2
            }}
        >
            <Stack>
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <IconButton
                        sx={{
                            fontSize: '1.7rem',
                            p: 2,
                            ml: -1
                        }}
                    >
                        <AiFillCaretDown />
                    </IconButton>

                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                        Course #1
                    </Typography>

                    <TooltipWrapper title="Delete course from the cart">
                        <IconButton
                            sx={{
                                fontSize: '1.7rem',
                                p: 2,
                                ml: 'auto',
                                mr: -2,
                                color: (theme) => theme.palette.error.main
                            }}
                        >
                            <FiTrash2 />
                        </IconButton>
                    </TooltipWrapper>
                </Stack>

                <Collapse in={true} sx={{}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent
                                    sx={{
                                        px: 1,
                                        py: 2,
                                        paddingBottom: '16px !important'
                                    }}
                                >
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <IconButton
                                            sx={{
                                                fontSize: '1.5rem',
                                                p: 1.5
                                            }}
                                        >
                                            <AiFillCaretRight />
                                        </IconButton>

                                        <Stack
                                            sx={{
                                                maxWidth: 90
                                            }}
                                        >
                                            <TooltipWrapper title="Course #1 delicious food">
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {trimText('Course #1 delicious food', 9)}
                                                </Typography>
                                            </TooltipWrapper>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 'bolder',
                                                    mt: 0.5,
                                                    color: (theme) => theme.palette.primary.main
                                                }}
                                            >
                                                £23.00
                                            </Typography>
                                        </Stack>

                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            sx={{
                                                ml: 'auto',
                                                mr: -2
                                            }}
                                        >
                                            <IconButton
                                                sx={{
                                                    p: 1.4,
                                                    mr: 1
                                                }}
                                            >
                                                <AiOutlineMinusCircle />
                                            </IconButton>

                                            <Typography variant="body1">2</Typography>

                                            <IconButton
                                                sx={{
                                                    p: 1.4,
                                                    ml: 1
                                                }}
                                            >
                                                <AiOutlinePlusCircle />
                                            </IconButton>
                                        </Stack>

                                        <IconButton
                                            sx={{
                                                fontSize: '1.5rem',
                                                p: 1.4,
                                                ml: 'auto',
                                                color: (theme) => theme.palette.error.main
                                            }}
                                        >
                                            <FiTrash2 />
                                        </IconButton>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Collapse>
            </Stack>
        </Stack>
    );
};

export default CourseSection;
