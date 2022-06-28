import { Collapse, IconButton, Stack, Typography } from '@mui/material';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CourseItemType, deleteCourse } from '@/features/course-features/courseSlice';
import CourseItem from './CourseItem';

interface PropInterface {
    index: number;
    course: {
        items: {
            [key: string]: CourseItemType;
        };
        open: boolean;
    };
}

/**
 * Single course component for the cart
 * @returns {JSX.Element}
 * @constructor
 */
const Course = ({ index, course }: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Delete the course by its index number
     * @param {number} index
     */
    const handleCourseDelete = (index: number) => {
        dispatch(deleteCourse(index));
    };

    return (
        <div className="course-wrapper">
            <Stack direction="row" alignItems="center" gap={1.5}>
                <IconButton
                    sx={{
                        fontSize: '1.6rem',
                        p: 1.5,
                        ml: -1
                    }}
                >
                    {course.open ? <AiFillCaretDown /> : <AiFillCaretRight />}
                </IconButton>

                <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                    Course #{index + 1}
                </Typography>

                <IconButton
                    sx={{
                        fontSize: '1.7rem',
                        p: 1.7,
                        ml: 'auto',
                        mr: -2,
                        color: (theme) => theme.palette.error.main
                    }}
                    onClick={() => {
                        handleCourseDelete(index);
                    }}
                >
                    <FiTrash2 />
                </IconButton>
            </Stack>

            <Collapse in={course.open} sx={{ mt: -0.1 }}>
                <Stack gap={1.5}>
                    {course?.items && // eslint-disable-line
                        Object.keys(course.items).map((key, index) => (
                            <CourseItem key={index} item={course.items[key]} />
                        ))}
                </Stack>
            </Collapse>
        </div>
    );
};

export default Course;
