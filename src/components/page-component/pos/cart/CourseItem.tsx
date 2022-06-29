import React, { useEffect, useRef } from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';
import { FiTrash2 } from 'react-icons/fi';
import { CourseItemType, deleteItem } from '@/features/course/courseSlice';
import { useDispatch } from 'react-redux';

interface PropInterface {
    item: CourseItemType;
    courseIndex: number;
}

/**
 * Single course item component for displaying course item
 * @returns {JSX.Element}
 * @constructor
 */
const CourseItem = ({ item, courseIndex }: PropInterface) => {
    const { id, name, price, quantity } = item;

    const dispatch = useDispatch();

    return (
        <Card sx={{ boxShadow: (theme) => theme.shadows[5] }}>
            <CardContent
                sx={{
                    px: 2,
                    py: 2,
                    paddingBottom: '10px !important'
                }}
            >
                <Stack alignItems="start" gap={1}>
                    <Stack alignItems="start">
                        <TooltipWrapper title="Course #1 delicious food">
                            <Typography
                                variant="body1"
                                sx={{
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {trimText(name || '', 39)}
                            </Typography>
                        </TooltipWrapper>
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={1}
                        sx={{
                            width: '100%',
                            marginTop: -1
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 'bolder',
                                mt: 0.5,
                                color: (theme) => theme.palette.primary.main
                            }}
                        >
                            £{price?.toFixed(2)}
                        </Typography>

                        <Stack direction="row" alignItems="center" sx={{ mt: '2px' }}>
                            <IconButton sx={{ mr: 0.5 }}>
                                <AiOutlineMinusCircle />
                            </IconButton>

                            <Typography variant="body1">{quantity}</Typography>

                            <IconButton sx={{ ml: 0.5 }}>
                                <AiOutlinePlusCircle />
                            </IconButton>
                        </Stack>

                        <IconButton
                            sx={{
                                fontSize: '1.5rem',
                                p: 1.2,
                                ml: 'auto',
                                mr: -1.2,
                                color: (theme) => theme.palette.error.main
                            }}
                            onClick={() =>
                                dispatch(
                                    deleteItem({
                                        courseIndex,
                                        itemID: id
                                    })
                                )
                            }
                        >
                            <FiTrash2 />
                        </IconButton>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CourseItem;
