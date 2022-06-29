import { Collapse, IconButton, Stack, Typography } from '@mui/material';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CourseItemType, deleteCourse, expandCourse } from '@/features/course/courseSlice';
import CourseItem from './CourseItem';

interface PropInterface {
    courseIndex: number;
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
const Course = ({ courseIndex, course }: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Delete the course by its index number
     */
    const handleCourseDelete = () => {
        dispatch(deleteCourse(courseIndex));
    };

    const divRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <div className="course-wrapper">
            <Stack direction="row" alignItems="center" gap={1.5}>
                <IconButton
                    sx={{
                        fontSize: '1.6rem',
                        p: 1.2,
                        ml: -1
                    }}
                    onClick={() => dispatch(expandCourse(courseIndex))}
                >
                    {course.open ? <AiFillCaretDown /> : <AiFillCaretRight />}
                </IconButton>

                <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                    Course #{courseIndex + 1}
                </Typography>

                <IconButton
                    sx={{
                        fontSize: '1.6rem',
                        p: 1.4,
                        ml: 'auto',
                        mr: -2,
                        color: (theme) => theme.palette.error.main
                    }}
                    onClick={() => {
                        handleCourseDelete();
                    }}
                >
                    <FiTrash2 />
                </IconButton>
            </Stack>

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
