import { IconButton, Stack, TextField } from '@mui/material';
import { MdOutlineCancel } from 'react-icons/md';
import { ChangeEvent, FormEvent } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { Course } from '@/features/cart/courseSlice';

interface PropInterface {
    courseIndex: number;
    course: Course;
    courseName: string;
    setEditCourseName: (param: boolean) => void;
    setCourseName: (param: string) => void;
    saveCourseName: () => void;
}

/**
 * Edit course name component for editing the course name field
 * @param {number} courseIndex
 * @param {Course} course
 * @param {string} courseName
 * @param {Function} setEditCourseName
 * @param {Function} setCourseName
 * @param {Function} saveCourseName
 * @returns {JSX.Element}
 * @constructor
 */
const EditCourseName = ({
    courseIndex,
    course,
    courseName,
    setEditCourseName,
    setCourseName,
    saveCourseName
}: PropInterface) => {
    /**
     * Handle course name edit input change
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleCourseNameEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value as string;

        setCourseName(value);
    };

    return (
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
    );
};

export default EditCourseName;
