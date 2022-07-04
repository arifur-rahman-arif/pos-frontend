import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, CardContent, Collapse, IconButton, Stack, TextField, Typography } from '@mui/material';
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
    increaseItemQuantity,
    modifyItemQuantity,
    toggleItemExpand
} from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';
import CourseItemNote from './CourseItemNote';
import { Draggable } from 'react-beautiful-dnd';

interface PropInterface {
    item: CourseItemType;
    courseIndex: number;
    loopIndex: number;
}

/**
 * Single course item component for displaying course item
 * @returns {JSX.Element}
 * @constructor
 */
const CourseItem = ({ item, courseIndex, loopIndex }: PropInterface) => {
    const { id, name, price, quantity, itemNote, itemOpen } = item;

    const dispatch = useDispatch();

    const [editQuantity, setEditQuantity] = useState<number>(quantity);

    useEffect(() => {
        setEditQuantity(quantity);
    }, [quantity]);

    /**
     * Handle the item quantity change event
     * @param {"increase" | "decrease"} type
     * @returns {any}
     */
    const handleQuantity = (type: 'increase' | 'decrease' | 'edit') => {
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

    /**
     * Handle the item quantity edit event
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleItemQuantityEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = parseInt(e.target.value);

        setEditQuantity(value);

        dispatch(modifyItemQuantity({ courseIndex, itemID: id, quantity: value }));
    };

    // @ts-ignore
    return (
        <Draggable draggableId={id} index={loopIndex} key={id}>
            {(provided, snapshot) => (
                <Card
                    sx={{
                        boxShadow: (theme) => theme.shadows[5],
                        mb: 1.6
                    }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
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
                                flexWrap={quantity.toString().length < 4 ? 'nowrap' : 'wrap'}
                                sx={{
                                    width: '100%',
                                    marginTop: -1
                                }}
                            >
                                <IconButton
                                    sx={{
                                        fontSize: '1.1rem',
                                        p: 1,
                                        ml: -1,
                                        top: 2
                                    }}
                                    onClick={() => dispatch(toggleItemExpand({ courseIndex, itemID: id }))}
                                >
                                    {itemOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                </IconButton>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 'bolder',
                                        mt: 0.5,
                                        color: (theme) => theme.palette.primary.main
                                    }}
                                >
                                    £{price?.toFixed(2)}
                                </Typography>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ mt: '2px', cursor: 'pointer', ml: 0.5 }}
                                >
                                    <IconButton
                                        sx={{ mr: 0.5, fontSize: '1.29rem' }}
                                        onClick={() => handleQuantity('decrease')}
                                    >
                                        <AiOutlineMinusCircle />
                                    </IconButton>

                                    <Typography variant="body2">{quantity}</Typography>

                                    <IconButton
                                        sx={{ ml: 0.5, fontSize: '1.29rem' }}
                                        onClick={() => handleQuantity('increase')}
                                    >
                                        <AiOutlinePlusCircle />
                                    </IconButton>
                                </Stack>

                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    sx={{
                                        ml: quantity.toString().length > 3 && itemNote ? 0 : 'auto',
                                        mr: -1
                                    }}
                                >
                                    {itemNote && (
                                        <IconButton
                                            sx={{
                                                fontSize: '1.35rem',
                                                p: 1,
                                                top: 1,
                                                color: (theme) => theme.palette.info.main
                                            }}
                                            onClick={() => {
                                                dispatch(toggleItemExpand({ courseIndex, itemID: id }));
                                            }}
                                        >
                                            <AiOutlineComment />
                                        </IconButton>
                                    )}

                                    <IconButton
                                        sx={{
                                            fontSize: '1.25rem',
                                            p: 1,
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

                            <Collapse in={itemOpen} collapsedSize={0} sx={{ mt: -1, width: '100%' }}>
                                <Stack sx={{ pt: 2, pb: 1.2 }} gap={2}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        label="Item quantity"
                                        value={editQuantity ? editQuantity : ''}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        onChange={handleItemQuantityEdit}
                                    />

                                    <CourseItemNote item={item} courseIndex={courseIndex} />
                                </Stack>
                            </Collapse>
                        </Stack>
                    </CardContent>
                </Card>
            )}
        </Draggable>
    );
};

export default CourseItem;
