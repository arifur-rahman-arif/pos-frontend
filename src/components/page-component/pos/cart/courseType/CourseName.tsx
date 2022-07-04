import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import {
    clearCourseNote,
    Course,
    deleteCourse,
    expandCourse,
    saveCourseName as reduxSaveCourseName,
    saveCourseNote
} from '@/features/cart/courseSlice';
import { AiFillCaretDown, AiFillCaretRight, AiOutlineComment, AiOutlineSave } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { handleAlert } from '@/features/alert/alertSlice';
import useLongPress from 'src/hooks/useLongPress';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';

interface PropInterface {
    courseIndex: number;
    course: Course;
}

/**
 * Course name component
 * @param {number} courseIndex
 * @param {Course} course
 * @returns {JSX.Element}
 * @constructor
 */
const CourseName = ({ courseIndex, course }: PropInterface) => {
    const dispatch = useDispatch();

    const [showCourseOptions, setShowCourseOptions] = useState<boolean>(false);

    const [courseName, setCourseName] = useState(course.name ? course.name : `Course ${courseIndex + 1}`);

    const [editCourseName, setEditCourseName] = useState<boolean>(false);

    const [showCourseNoteInput, setShowCourseNoteInput] = useState<boolean>(false);

    const [courseNote, setCourseNote] = useState<string>(course.note ? course.note : '');

    const [showReadOnlyCourseNote, setShowReadOnlyCourseNote] = useState<boolean>(false);

    /**
     * Delete the course by its index number
     */
    const handleCourseDelete = () => {
        dispatch(deleteCourse(courseIndex));
    };

    /**
     * Handle the long press of element
     */
    const onLongPress = () => {
        setShowCourseOptions(true);
    };

    const longPressEvent = useLongPress(onLongPress);

    /**
     * Save the course name
     */
    const saveCourseName = () => {
        try {
            dispatch(reduxSaveCourseName({ courseIndex, name: courseName }));

            setEditCourseName(false);

            setShowCourseOptions(false);
        } catch (error: any) {
            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    /**
     * Handle course name edit input change
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleCourseNameEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value as string;

        setCourseName(value);
    };

    /**
     * Handle the course note edit event
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleCourseNoteEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const courseNote: string = e.target.value;

        setCourseNote(courseNote);
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={showCourseOptions ? 0.5 : 1}
            sx={showCourseOptions ? { mt: 1.2, mb: Object.keys(course.items).length ? 2 : 0 } : {}}
        >
            {/* If showCourseInput is false then show these components */}
            {!showCourseOptions && !showReadOnlyCourseNote && (
                <>
                    <IconButton
                        sx={{
                            fontSize: '1.3rem',
                            p: 1,
                            ml: -1.5
                        }}
                        onClick={() => dispatch(expandCourse(courseIndex))}
                    >
                        {course.open ? <AiFillCaretDown /> : <AiFillCaretRight />}
                    </IconButton>

                    {/* If the course name is longer than 28 characters then show the tooltip or else show the normal text */}
                    {(course.name ? course.name : courseName).length > 25 ? (
                        <TooltipWrapper title={course.name ? course.name : courseName} placement="left">
                            <Typography
                                {...longPressEvent}
                                variant="h6"
                                sx={{
                                    fontWeight: 'bolder',
                                    fontSize: '0.999rem !important',
                                    cursor: 'pointer',
                                    minWidth: '100%',
                                    lineHeight: '35px',
                                    '&:first-letter': {
                                        textTransform: 'uppercase'
                                    }
                                }}
                            >
                                {trimText(course.name ? course.name : courseName, 25)}

                                {course.note && (
                                    <IconButton
                                        sx={{
                                            fontSize: '1.35rem',
                                            top: -1.3,
                                            ml: 1,
                                            color: (theme) => theme.palette.info.main
                                        }}
                                        onClick={() => {}}
                                    >
                                        <AiOutlineComment />
                                    </IconButton>
                                )}
                            </Typography>
                        </TooltipWrapper>
                    ) : (
                        <Typography
                            {...longPressEvent}
                            variant="h6"
                            sx={{
                                fontWeight: 'bolder',
                                fontSize: '0.999rem !important',
                                cursor: 'pointer',
                                minWidth: '100%',
                                lineHeight: '35px',
                                '&:first-letter': {
                                    textTransform: 'uppercase'
                                }
                            }}
                        >
                            {course.name ? course.name : courseName}

                            {course.note && (
                                <IconButton
                                    sx={{
                                        fontSize: '1.35rem',
                                        top: -1.3,
                                        ml: 1,
                                        color: (theme) => theme.palette.info.main
                                    }}
                                    onClick={() => {
                                        // SetShowCourseOptions(true);

                                        setShowReadOnlyCourseNote(true);
                                    }}
                                >
                                    <AiOutlineComment />
                                </IconButton>
                            )}
                        </Typography>
                    )}
                </>
            )}

            {/* If showCourseInput is true then show the course name edit component */}
            {editCourseName && (
                <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
                    <IconButton
                        sx={{
                            fontSize: '1.5rem',
                            ml: -1,
                            color: (theme) => theme.palette.error.main
                        }}
                        onClick={() => {
                            setEditCourseName(false);

                            setCourseName(course.name ? course.name : `Course ${courseIndex + 1}`);
                        }}
                    >
                        <MdOutlineCancel />
                    </IconButton>

                    <form
                        onSubmit={(e: FormEvent<HTMLFormElement>) => {
                            e.preventDefault();

                            saveCourseName();
                        }}
                    >
                        <TextField
                            fullWidth
                            type="text"
                            label="Course name"
                            value={courseName}
                            onChange={handleCourseNameEdit}
                        />
                    </form>

                    <IconButton
                        sx={{
                            fontSize: '1.5rem',
                            mr: -1,
                            color: (theme) => theme.palette.primary.main
                        }}
                        onClick={() => {
                            saveCourseName();
                        }}
                    >
                        <AiOutlineSave />
                    </IconButton>
                </Stack>
            )}

            {showCourseOptions && !editCourseName && !showCourseNoteInput && !showReadOnlyCourseNote && (
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    justifyContent="space-around"
                    sx={{ width: '100%' }}
                >
                    <IconButton
                        sx={{
                            fontSize: '1.6rem',
                            color: (theme) => theme.palette.error.main
                        }}
                        onClick={() => {
                            setShowCourseOptions(false);
                        }}
                    >
                        <MdOutlineCancel />
                    </IconButton>

                    <Button variant="outlined" size="small" onClick={() => setEditCourseName(true)}>
                        Edit
                    </Button>

                    <Button variant="outlined" size="small">
                        Fire
                    </Button>

                    <Button variant="outlined" size="small" onClick={() => setShowCourseNoteInput(true)}>
                        Note
                    </Button>

                    <IconButton
                        sx={{
                            fontSize: '1.45rem',
                            color: (theme) => theme.palette.error.main
                        }}
                        onClick={() => {
                            handleCourseDelete();

                            setShowCourseOptions(false);
                        }}
                    >
                        <FiTrash2 />
                    </IconButton>
                </Stack>
            )}

            {/* Course not input components */}
            {showCourseNoteInput && (
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
            )}

            {showReadOnlyCourseNote && (
                <Stack gap={1} sx={{ width: '100%', mt: 1, mb: Object.keys(course.items).length ? 2 : 0 }}>
                    <Typography variant="body1">{courseNote}</Typography>

                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        onClick={() => {
                            setShowReadOnlyCourseNote(false);
                        }}
                    >
                        Close
                    </Button>
                </Stack>
            )}
        </Stack>
    );
};

export default CourseName;
