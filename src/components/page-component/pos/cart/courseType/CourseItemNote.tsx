import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { clearItemNote, CourseItemType, setItemNote as reduxSetItemNote } from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';

interface PropInterface {
    item: CourseItemType;
    courseIndex: number;
}

/**
 * Course item note component for showing the individual course item note
 * @param {CourseItemType} item
 * @param {number} courseIndex
 * @returns {JSX.Element}
 * @constructor
 */
const CourseItemNote = ({ item, courseIndex }: PropInterface) => {
    const { id } = item;

    const dispatch = useDispatch();

    const [itemNote, setItemNote] = useState<string | undefined>(item.itemNote);

    const [typingTimer, setTypingTimer] = useState<any>();

    /**
     * Handle the item note edit event
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleItemNoteEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const itemNote: string = e.target.value;

        setItemNote(itemNote);

        clearTimeout(typingTimer);

        const timeoutID = setTimeout(() => {
            dispatch(reduxSetItemNote({ courseIndex, itemID: id, note: itemNote }));
        }, 1000);

        setTypingTimer(timeoutID);
    };

    return (
        <>
            <TextField
                fullWidth
                type="text"
                label="Item note"
                multiline
                rows={3}
                value={itemNote || ''}
                onChange={handleItemNoteEdit}
            />

            {itemNote && (
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                        setItemNote('');
                        dispatch(clearItemNote({ courseIndex, itemID: id }));
                    }}
                >
                    Clear note
                </Button>
            )}
        </>
    );
};

export default CourseItemNote;
