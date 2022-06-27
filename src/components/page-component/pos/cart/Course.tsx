import { Collapse, IconButton, Stack, Typography } from '@mui/material';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '@/features/course-features/courseSlice';
import CourseItem from './CourseItem';

type CourseItem = {
    name: string;
    price: number;
    quantity: number;
};

interface PropInterface {
    index: number;
    course: {
        items: Array<CourseItem>;
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
                        fontSize: '1.7rem',
                        p: 1.5,
                        ml: -1
                    }}
                >
                    <AiFillCaretDown />
                </IconButton>

                <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                    Course #{index + 1}
                </Typography>

                <IconButton
                    sx={{
                        fontSize: '1.7rem',
                        p: 2,
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

            <Collapse in={true} sx={{ mt: -0.5 }}>
                <Stack gap={1.5}>
                    {course?.items && // eslint-disable-line
                        course.items.map((item, index) => <CourseItem key={index} item={item} />)}
                </Stack>
            </Collapse>
        </div>
    );
};

export default Course;
