import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartItemType, clearItemNote } from '@/features/cart/normalSlice';
import { setItemNote as reduxSetItemNote } from '@/features/cart/normalSlice';

interface PropInterface {
    item: CartItemType;
}

/**
 * Item note component for showing the individual items note
 * @param {CourseItemType} item
 * @param {number} courseIndex
 * @returns {JSX.Element}
 * @constructor
 */
const ItemNote = ({ item }: PropInterface) => {
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
            dispatch(reduxSetItemNote({ itemID: id, note: itemNote }));
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
                        dispatch(clearItemNote({ itemID: id }));
                    }}
                >
                    Clear note
                </Button>
            )}
        </>
    );
};
export default ItemNote;
