import React, { useState } from 'react';
import { Card, CardContent, Collapse, IconButton, Stack, Typography } from '@mui/material';
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiOutlineComment,
    AiOutlineMinusCircle,
    AiOutlinePlusCircle
} from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';
import { FiTrash2 } from 'react-icons/fi';
import {
    CourseItemType,
    decreaseItemQuantity,
    deleteItem,
    increaseItemQuantity
} from '@/features/course/courseSlice';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';

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

    const [itemExpanded, setItemExpanded] = useState<boolean>(false);

    /**
     * Handle the item quantity change event
     * @param {"increase" | "decrease"} type
     * @returns {any}
     */
    const handleQuantity = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            dispatch(increaseItemQuantity({ courseIndex, itemID: id }));
        }

        if (type === 'decrease') {
            if (quantity < 2) {
                return dispatch(
                    handleAlert({
                        showAlert: true,
                        alertMessage: 'Quantity must be greater than zero',
                        alertType: 'info'
                    })
                );
            }

            dispatch(decreaseItemQuantity({ courseIndex, itemID: id }));
        }
    };

    return (
        <Card
            sx={{ boxShadow: (theme) => theme.shadows[5], cursor: 'pointer' }}
            onDragEnter={() => alert('Drag enter')}
            onDragLeave={() => alert('Drag leave')}
        >
            <CardContent
                sx={{
                    px: 2,
                    py: 2,
                    paddingBottom: '10px !important'
                }}
            >
                <Stack alignItems="start" gap={1}>
                    <Stack alignItems="start">
                        {name.length > 39 ? (
                            <TooltipWrapper title={name}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {trimText(name || '', 39)}
                                </Typography>
                            </TooltipWrapper>
                        ) : (
                            <Typography
                                variant="body1"
                                sx={{
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {trimText(name || '', 39)}
                            </Typography>
                        )}
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
                        <IconButton
                            sx={{
                                fontSize: '1.3rem',
                                p: 1,
                                ml: -1,
                                top: 2
                            }}
                            onClick={() => setItemExpanded(!itemExpanded)}
                        >
                            {itemExpanded ? <AiFillCaretDown /> : <AiFillCaretRight />}
                        </IconButton>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 'bolder',
                                mt: 0.5,
                                ml: -0.5,
                                color: (theme) => theme.palette.primary.main
                            }}
                        >
                            £{price?.toFixed(2)}
                        </Typography>

                        <Stack direction="row" alignItems="center" sx={{ mt: '2px', cursor: 'pointer' }}>
                            <IconButton sx={{ mr: 0.5 }} onClick={() => handleQuantity('decrease')}>
                                <AiOutlineMinusCircle />
                            </IconButton>

                            <Typography variant="body1">{quantity}</Typography>

                            <IconButton sx={{ ml: 0.5 }} onClick={() => handleQuantity('increase')}>
                                <AiOutlinePlusCircle />
                            </IconButton>
                        </Stack>

                        <IconButton
                            sx={{
                                fontSize: '1.6rem',
                                p: 1,
                                ml: 'auto',
                                mr: -3.5,
                                top: 1.5,
                                color: (theme) => theme.palette.info.main
                            }}
                        >
                            <AiOutlineComment />
                        </IconButton>

                        <IconButton
                            sx={{
                                fontSize: '1.5rem',
                                p: 1,
                                mr: -1.2,
                                ml: 'auto',
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

                    <Collapse in={itemExpanded} collapsedSize={0} sx={{ mt: -1 }}>
                        <h3>hello</h3>
                    </Collapse>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CourseItem;
