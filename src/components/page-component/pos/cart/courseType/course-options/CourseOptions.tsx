import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Stack } from '@mui/material';
import { Course, saveCourseName as reduxSaveCourseName } from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';
import useLongPress from 'src/hooks/useLongPress';

const CourseName = dynamic(() => import('./CourseName'));
const EditCourseName = dynamic(() => import('./EditCourseName'));
const CourseOptionsButtons = dynamic(() => import('./CourseOptionsButtons'));
const CourseNoteInput = dynamic(() => import('./CourseNoteInput'));
const CourseNote = dynamic(() => import('./CourseNote'));
const CourseFire = dynamic(() => import('./course-fire/CourseFire'));

interface PropInterface {
    courseIndex: number;
    course: Course;
}

/**
 * Course name component
 * @param {number} courseIndex
 * @param {Course} course
 * @returns {JSX.Element}
 * @constructor
 */
const CourseOptions = ({ courseIndex, course }: PropInterface) => {
    const dispatch = useDispatch();

    const [showCourseOptions, setShowCourseOptions] = useState<boolean>(false);

    const [courseName, setCourseName] = useState(course.name ? course.name : `Course ${courseIndex + 1}`);

    const [editCourseName, setEditCourseName] = useState<boolean>(false);

    const [showCourseNoteInput, setShowCourseNoteInput] = useState<boolean>(false);

    const [courseNote, setCourseNote] = useState<string>(course.note ? course.note : '');

    const [showReadOnlyCourseNote, setShowReadOnlyCourseNote] = useState<boolean>(false);

    const [showCourseFireComponent, setShowCourseFireComponent] = useState<boolean>(false);

    /**
     * Handle the long press of element
     */
    const onLongPress = () => {
        setShowCourseOptions(true);
    };

    const longPressEvent = useLongPress(onLongPress);

    /**
     * Save the course name
     */
    const saveCourseName = () => {
        try {
            dispatch(reduxSaveCourseName({ courseIndex, name: courseName }));

            setEditCourseName(false);

            setShowCourseOptions(false);
        } catch (error: any) {
            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={showCourseOptions ? 0.5 : 1}
            sx={
                showCourseOptions
                    ? { mt: 1.2, mb: Object.keys(course.items).length && course.open ? 2 : 0 }
                    : {}
            }
        >
            {/* If showCourseOption is false and readonly create note is not visible then show the CourseName component */}
            {!showCourseOptions && !showReadOnlyCourseNote && (
                <CourseName
                    courseIndex={courseIndex}
                    course={course}
                    courseName={courseName}
                    longPressEvent={longPressEvent}
                    setShowReadOnlyCourseNote={setShowReadOnlyCourseNote}
                />
            )}

            {/* If editCourseName is true then show the course name edit component */}
            {editCourseName && (
                <EditCourseName
                    courseIndex={courseIndex}
                    course={course}
                    courseName={courseName}
                    setEditCourseName={setEditCourseName}
                    setCourseName={setCourseName}
                    saveCourseName={saveCourseName}
                />
            )}

            {/* eslint-disable */}
            {showCourseOptions &&
                !editCourseName &&
                !showCourseNoteInput &&
                !showReadOnlyCourseNote &&
                !showCourseFireComponent && (
                    <CourseOptionsButtons
                        courseIndex={courseIndex}
                        setEditCourseName={setEditCourseName}
                        setShowCourseNoteInput={setShowCourseNoteInput}
                        setShowCourseOptions={setShowCourseOptions}
                        setShowCourseFireComponent={setShowCourseFireComponent}
                    />
                )}

            {/* Course note input component */}
            {showCourseNoteInput && (
                <CourseNoteInput
                    courseIndex={courseIndex}
                    courseNote={courseNote}
                    setCourseNote={setCourseNote}
                    setShowCourseNoteInput={setShowCourseNoteInput}
                    setShowCourseOptions={setShowCourseOptions}
                />
            )}

            {showReadOnlyCourseNote && (
                <CourseNote
                    course={course}
                    courseNote={courseNote}
                    setShowReadOnlyCourseNote={setShowReadOnlyCourseNote}
                />
            )}

            {showCourseFireComponent && (
                <CourseFire
                    courseName={courseName}
                    setShowCourseFireComponent={setShowCourseFireComponent}
                    setShowCourseOptions={setShowCourseOptions}
                />
            )}
        </Stack>
    );
};

export default CourseOptions;
