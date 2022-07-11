import { Button, IconButton, Stack } from '@mui/material';
import { MdOutlineCancel } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { deleteCourse } from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';

interface PropInterface {
    courseIndex: number;
    setEditCourseName: (param: boolean) => void;
    setShowCourseNoteInput: (param: boolean) => void;
    setShowCourseOptions: (param: boolean) => void;
    setShowCourseFireComponent: (param: boolean) => void;
}

/**
 * Course options buttons component for showing the options when holding the course name for long time
 * @param {number} courseIndex
 * @param {Function} setEditCourseName
 * @param {Function} setShowCourseNoteInput
 * @param {Function} setShowCourseOptions
 * @param {Function} setShowCourseFireComponent
 * @returns {JSX.Element}
 * @constructor
 */
const CourseOptionsButtons = ({
    courseIndex,
    setEditCourseName,
    setShowCourseNoteInput,
    setShowCourseOptions,
    setShowCourseFireComponent
}: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Delete the course by its index number
     */
    const handleCourseDelete = () => {
        dispatch(deleteCourse(courseIndex));

        setShowCourseOptions(false);
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={1.5}
            justifyContent="space-around"
            sx={{ width: '100%' }}
        >
            <IconButton
                sx={{
                    width: '2.5rem',
                    height: '2.5rem',
                    top: -0.5,
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

            <Button variant="outlined" size="small" onClick={() => setShowCourseFireComponent(true)}>
                Fire
            </Button>

            <Button variant="outlined" size="small" onClick={() => setShowCourseNoteInput(true)}>
                Note
            </Button>

            <IconButton
                sx={{
                    width: '2.5rem',
                    height: '2.5rem',
                    top: -1.4,
                    color: (theme) => theme.palette.error.main
                }}
                onClick={handleCourseDelete}
            >
                <FiTrash2 />
            </IconButton>
        </Stack>
    );
};

export default CourseOptionsButtons;
