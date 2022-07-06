import { Button, Stack, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent } from 'react';
import { clearCourseNote, saveCourseNote } from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';

interface PropInterface {
    courseIndex: number;
    courseNote: string;
    setCourseNote: (param: string) => void;
    setShowCourseNoteInput: (param: boolean) => void;
    setShowCourseOptions: (param: boolean) => void;
}

/**
 * Course note input component for entering a note for a course
 * @param {number} courseIndex
 * @param {string} courseNote
 * @param {Function} setCourseNote
 * @param {Function} setShowCourseNoteInput
 * @param {Function} setShowCourseOptions
 * @returns {JSX.Element}
 * @constructor
 */
const CourseNoteInput = ({
    courseIndex,
    courseNote,
    setCourseNote,
    setShowCourseNoteInput,
    setShowCourseOptions
}: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Handle the course note edit event
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleCourseNoteEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const courseNote: string = e.target.value;

        setCourseNote(courseNote);
    };

    return (
        <Stack gap={2} sx={{ width: '100%' }}>
            <TextField
                fullWidth
                type="text"
                label="Course note"
                multiline
                rows={3}
                value={courseNote || ''}
                onChange={handleCourseNoteEdit}
                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                    if (e.key == 'Enter' && !e.shiftKey) {
                        e.preventDefault();

                        setShowCourseNoteInput(false);

                        setShowCourseOptions(false);

                        dispatch(saveCourseNote({ courseIndex, note: courseNote }));
                    }
                }}
            />

            <Stack gap={1.5} direction="row" alignItems="center" justifyContent="flex-start">
                {courseNote && (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setCourseNote('');

                            dispatch(clearCourseNote({ courseIndex }));
                        }}
                    >
                        Clear note
                    </Button>
                )}

                {courseNote && (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setShowCourseNoteInput(false);

                            setShowCourseOptions(false);
                            dispatch(saveCourseNote({ courseIndex, note: courseNote }));
                        }}
                    >
                        Save note
                    </Button>
                )}

                <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => {
                        setShowCourseNoteInput(false);

                        setShowCourseOptions(false);
                    }}
                >
                    Close
                </Button>
            </Stack>
        </Stack>
    );
};

export default CourseNoteInput;
