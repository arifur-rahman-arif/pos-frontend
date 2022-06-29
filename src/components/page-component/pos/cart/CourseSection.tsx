import React from 'react';
import { Button, Stack } from '@mui/material';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Course from './Course';
import { useDispatch, useSelector } from 'react-redux';
import { CourseSliceStateInterface, createNewCourse } from '@/features/course/courseSlice';
import { AppState } from '@/app/store';

/**
 * Course section of Cart
 * @returns {JSX.Element}
 * @constructor
 */
const CourseSection = () => {
    const dispatch = useDispatch();

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    return (
        <Stack
            sx={{
                pb: 2
            }}
        >
            <Stack gap={1}>
                <Stack justifyContent="flex-start" direction="row" sx={{ px: 3 }}>
                    <Button
                        variant="outlined"
                        size="medium"
                        endIcon={<AiOutlinePlusCircle />}
                        onClick={() => dispatch(createNewCourse())}
                    >
                        Create course
                    </Button>
                </Stack>

                <Stack
                    id="pos_course_container"
                    sx={{
                        maxHeight: 'calc(100vh - 500px)',
                        minHeight: '300px',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        pb: 2,
                        px: 2.5
                    }}
                >
                    {courses && // eslint-disable-line
                        courses.map((course, index) => (
                            <Course key={index} courseIndex={index} course={course} />
                        ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CourseSection;
