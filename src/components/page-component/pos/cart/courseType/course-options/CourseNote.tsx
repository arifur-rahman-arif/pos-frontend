import { Button, Stack, Typography } from '@mui/material';
import type { Course } from '@/features/cart/courseSlice';

interface PropInterface {
    course: Course;
    courseNote: string;
    setShowReadOnlyCourseNote: (param: boolean) => void;
}

/**
 * Course note component to display the course note
 * @param {Course} course
 * @param {string} courseNote
 * @param {Function} setShowReadOnlyCourseNote
 * @returns {JSX.Element}
 * @constructor
 */
const CourseNote = ({ course, courseNote, setShowReadOnlyCourseNote }: PropInterface) => {
    return (
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
    );
};

export default CourseNote;
