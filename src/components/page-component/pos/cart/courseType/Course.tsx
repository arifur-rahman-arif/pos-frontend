import { Collapse, Stack } from '@mui/material';
import { useEffect, useRef } from 'react';
import { CourseItemType } from '@/features/cart/courseSlice';
import CourseItem from './CourseItem';
import CourseOptions from './course-options/CourseOptions';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

interface PropInterface {
    courseIndex: number;
    course: {
        items: {
            [key: string]: CourseItemType;
        };
        open: boolean;
    };
    scrollIntoView: boolean | undefined;
}

/**
 * Single course component for the cart
 * @returns {JSX.Element}
 * @constructor
 */
const Course = ({ courseIndex, course, scrollIntoView }: PropInterface) => {
    const divRef = useRef(null);

    useEffect(() => {
        if (scrollIntoView) {
            // @ts-ignore
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    });

    return (
        <div className="course-wrapper">
            <CourseOptions courseIndex={courseIndex} course={course} />

            <Collapse in={course.open} sx={{ mt: -0.1, mb: 1, overflowY: 'unset', width: '100%' }}>
                <Droppable droppableId={courseIndex.toString()}>
                    {(provided: DroppableProvided, snapshot) => (
                        <Stack ref={provided.innerRef} {...provided.droppableProps}>
                            {course?.items && // eslint-disable-line
                                Object.keys(course.items).map((key, index) => (
                                    <CourseItem
                                        key={index}
                                        item={course.items[key]}
                                        courseIndex={courseIndex}
                                        loopIndex={index}
                                    />
                                ))}
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>
            </Collapse>

            <div ref={divRef} />
        </div>
    );
};

export default Course;
