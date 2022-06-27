import React from 'react';
import { Button, Stack } from '@mui/material';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Course from './Course';
import { useDispatch, useSelector } from 'react-redux';
import { CourseSliceStateInterface, createNewCourse } from '@/features/course-features/courseSlice';
import { AppState } from '@/app/store';
import { Scrollbar } from '@/components/scrollbar';

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
                        size="large"
                        endIcon={<AiOutlinePlusCircle />}
                        sx={{ p: 2 }}
                        onClick={() => dispatch(createNewCourse())}
                    >
                        Create course
                    </Button>
                </Stack>

                <Stack
                    sx={{
                        maxHeight: 'calc(100vh - 500px)',
                        minHeight: '300px'
                    }}
                >
                    <Scrollbar
                        sx={{
                            '& .simplebar-content': {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'stretch'
                            },
                            pb: 2,
                            px: 3
                        }}
                    >
                        {courses && // eslint-disable-line
                            courses.map((course, index) => (
                                <Course key={index} index={index} course={course} />
                            ))}
                    </Scrollbar>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CourseSection;
