import React, { ChangeEvent, useState } from 'react';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import {
    CourseItemType,
    deleteCourse,
    expandCourse,
    saveCourseName as reduxSaveCourseName
} from '@/features/course/courseSlice';
import { AiFillCaretDown, AiFillCaretRight, AiOutlineSave } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { handleAlert } from '@/features/alert/alertSlice';
import useLongPress from 'src/hooks/useLongPress';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';

interface PropInterface {
    courseIndex: number;
    course: {
        items: {
            [key: string]: CourseItemType;
        };
        open: boolean;
        name?: string;
    };
}

/**
 * Course name component
 * @param {number} courseIndex
 * @param {{items: Object<CourseItemType>}} course
 * @returns {JSX.Element}
 * @constructor
 */
const CourseName = ({ courseIndex, course }: PropInterface) => {
    const dispatch = useDispatch();

    const [showCourseInput, setShowCourseInput] = useState<boolean>(false);

    const [courseName, setCourseName] = useState(course.name ? course.name : `Course ${courseIndex + 1}`);

    /**
     * Delete the course by its index number
     */
    const handleCourseDelete = () => {
        dispatch(deleteCourse(courseIndex));
    };

    /**
     * Handle the long press of element
     */
    const onLongPress = () => {
        setShowCourseInput(true);
    };

    const longPressEvent = useLongPress(onLongPress);

    /**
     * Save the course name
     */
    const saveCourseName = () => {
        try {
            dispatch(reduxSaveCourseName({ courseIndex, name: courseName }));

            setShowCourseInput(false);
        } catch (error: any) {
            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    /**
     * Handle course name edit input change
     * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} e
     */
    const handleCourseNameEdit = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value as string;

        setCourseName(value);
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={showCourseInput ? 0.5 : 1}
            sx={showCourseInput ? { mt: 1.2, mb: Object.keys(course.items).length ? 2 : 0 } : {}}
        >
            {/* If showCourseInput is false then show these components */}
            {!showCourseInput && (
                <>
                    <IconButton
                        sx={{
                            fontSize: '1.4rem',
                            p: 1.2,
                            ml: -1.5
                        }}
                        onClick={() => dispatch(expandCourse(courseIndex))}
                    >
                        {course.open ? <AiFillCaretDown /> : <AiFillCaretRight />}
                    </IconButton>

                    {/* If the course name is longer than 28 characters then show the tooltip or else show the normal text */}
                    {(course.name ? course.name : courseName).length > 25 ? (
                        <TooltipWrapper title={course.name ? course.name : courseName} placement="left">
                            <Typography
                                {...longPressEvent}
                                variant="h6"
                                sx={{
                                    fontWeight: 'bolder',
                                    fontSize: '0.999rem !important',
                                    cursor: 'pointer',
                                    minWidth: 200,
                                    lineHeight: '35px'
                                }}
                            >
                                {trimText(course.name ? course.name : courseName, 25)}
                            </Typography>
                        </TooltipWrapper>
                    ) : (
                        <Typography
                            {...longPressEvent}
                            variant="h6"
                            sx={{
                                fontWeight: 'bolder',
                                fontSize: '0.999rem !important',
                                cursor: 'pointer',
                                minWidth: 200,
                                lineHeight: '35px'
                            }}
                        >
                            {course.name ? course.name : courseName}
                        </Typography>
                    )}

                    <IconButton
                        sx={{
                            fontSize: '1.5rem',
                            p: 1.4,
                            ml: 'auto',
                            mr: -1.7,
                            color: (theme) => theme.palette.error.main
                        }}
                        onClick={() => {
                            handleCourseDelete();
                        }}
                    >
                        <FiTrash2 />
                    </IconButton>
                </>
            )}

            {/* If showCourseInput is true then show the course name edit component */}
            {showCourseInput && (
                <>
                    <IconButton
                        sx={{
                            fontSize: '1.5rem',
                            ml: -1.5,
                            p: 1.4,
                            color: (theme) => theme.palette.error.main
                        }}
                        onClick={() => {
                            setShowCourseInput(false);

                            setCourseName(course.name ? course.name : `Course ${courseIndex + 1}`);
                        }}
                    >
                        <MdOutlineCancel />
                    </IconButton>

                    <TextField
                        fullWidth
                        type="text"
                        label="Course name"
                        value={courseName}
                        onChange={handleCourseNameEdit}
                    />

                    <IconButton
                        sx={{
                            fontSize: '1.5rem',
                            p: 1.4,
                            ml: 'auto',
                            mr: -1.5,
                            color: (theme) => theme.palette.primary.main
                        }}
                        onClick={() => {
                            saveCourseName();
                        }}
                    >
                        <AiOutlineSave />
                    </IconButton>
                </>
            )}
        </Stack>
    );
};

export default CourseName;
