import { Collapse, Stack } from '@mui/material';
import { useEffect, useRef } from 'react';
import { CourseItemType } from '@/features/course/courseSlice';
import CourseItem from './CourseItem';
import CourseName from './CourseName';

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
            <CourseName courseIndex={courseIndex} course={course} />

            <Collapse in={course.open} sx={{ mt: -0.1, mb: 1 }}>
                <Stack gap={1.5}>
                    {course?.items && // eslint-disable-line
                        Object.keys(course.items).map((key, index) => (
                            <CourseItem key={index} item={course.items[key]} courseIndex={courseIndex} />
                        ))}
                </Stack>
            </Collapse>

            <div ref={divRef} />
        </div>
    );
};

export default Course;
