import React from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { AiFillCaretRight, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';
import { FiTrash2 } from 'react-icons/fi';
import { CourseItem } from '@/features/course-features/courseSlice';

interface PropInterface {
    item: CourseItem;
}

/**
 * Single course item component for displaying course item
 * @returns {JSX.Element}
 * @constructor
 */
const CourseItem = ({ item }: PropInterface) => {
    const { name, price, quantity } = item;

    return (
        <Card sx={{ boxShadow: (theme) => theme.shadows[5] }}>
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
                                {trimText(name, 9)}
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
                            {price.toFixed(2)}
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
                                p: 1.3,
                                mr: 1
                            }}
                        >
                            <AiOutlineMinusCircle />
                        </IconButton>

                        <Typography variant="body1">{quantity}</Typography>

                        <IconButton
                            sx={{
                                p: 1.3,
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
    );
};

export default CourseItem;
