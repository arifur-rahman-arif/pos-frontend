import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Course from './Course';
import { useDispatch, useSelector } from 'react-redux';
import {
    CourseSliceStateInterface,
    createNewCourse,
    reArrangeCourseItems
} from '@/features/cart/courseSlice';
import { AppState } from '@/app/store';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { handleAlert } from '@/features/alert/alertSlice';
import { CartStateInterface, setScrollIntoView } from '@/features/cart/cartSlice';

/**
 * Course section of Cart
 * @returns {JSX.Element}
 * @constructor
 */
const CourseSection = () => {
    const dispatch = useDispatch();

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    const { scrollIntoView } = useSelector((state: AppState) => state.cartSlice as CartStateInterface);

    const [timer, setTimer] = useState<any>();

    /**
     * Create new course
     */
    const createCourse = () => {
        dispatch(createNewCourse());

        dispatch(setScrollIntoView(true));

        clearTimeout(timer);

        const timeoutID = setTimeout(() => {
            dispatch(setScrollIntoView(false));
        }, 800);

        setTimer(timeoutID);
    };

    /**
     * Handle the dragging items on drag end event
     * @param {DropResult} data
     */
    const onDragEnd = (data: DropResult) => {
        try {
            const { source, destination } = data;

            if (!destination) return;

            // If item is drag in same position in same course than return the function
            if (destination.droppableId === source.droppableId && destination.index === source.index) return;

            dispatch(
                reArrangeCourseItems({
                    source: {
                        courseIndex: Number(source.droppableId),
                        itemIndex: source.index
                    },
                    destination: {
                        courseIndex: Number(destination.droppableId),
                        itemIndex: destination.index
                    }
                })
            );
        } catch (error: any) {
            console.error(error);

            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    return (
        <Stack
            sx={{
                pb: 2
            }}
        >
            <Stack gap={1}>
                <Stack justifyContent="flex-start" direction="row" sx={{ px: 2 }}>
                    <Button
                        variant="outlined"
                        size="medium"
                        endIcon={<AiOutlinePlusCircle />}
                        onClick={createCourse}
                    >
                        Create course
                    </Button>
                </Stack>

                <Stack
                    id="pos_course_container"
                    sx={{
                        maxHeight: 'calc(100vh - 450px)',
                        minHeight: '300px',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        width: '100%',
                        pb: 2,
                        px: 2
                    }}
                >
                    <DragDropContext onDragEnd={onDragEnd}>
                        {courses && // eslint-disable-line
                            courses.map((course, index) => (
                                <Course
                                    key={index}
                                    courseIndex={index}
                                    course={course}
                                    scrollIntoView={scrollIntoView}
                                />
                            ))}
                    </DragDropContext>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CourseSection;
