import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { CourseSliceStateInterface, Course } from '@/features/course/courseSlice';
import { AppState } from '@/app/store';

/**
 * Get the course total for the cart
 * @param {Array<Course>} courses
 * @returns {number}
 */
const getCourseTotal = (courses: Array<Course>) => {
    let total = 0;

    courses.forEach((course: Course) => {
        for (const itemKey in course.items) {
            if (Object.hasOwnProperty.call(course.items, itemKey)) {
                const item = course.items[itemKey];
                total += item.price * item.quantity;
            }
        }
    });

    return total;
};
/**
 * Pay button component
 * @returns {JSX.Element}
 * @constructor
 */
const PayButton = () => {
    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    return (
        <Stack
            sx={{
                px: 2,
                pb: 2
            }}
        >
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: '15px',
                    height: 60
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bolder', mr: 'auto' }}>
                    Pay
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bolder', ml: 'auto' }}>
                    £{getCourseTotal(courses).toFixed(2)}
                </Typography>
            </Button>
        </Stack>
    );
};

export default PayButton;
