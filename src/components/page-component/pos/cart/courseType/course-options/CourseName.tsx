import { IconButton, Typography } from '@mui/material';
import { Course, expandCourse } from '@/features/cart/courseSlice';
import { AiFillCaretDown, AiFillCaretRight, AiOutlineComment } from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { trimText } from '@/utils/global';
import { useDispatch } from 'react-redux';

interface PropInterface {
    courseIndex: number;
    course: Course;
    courseName: string;
    longPressEvent: any;
    setShowReadOnlyCourseNote: (param: boolean) => void;
}

/**
 * Course name subcomponent for showing the course name
 * @param {number} courseIndex
 * @param {Course} course
 * @param {any} longPressEvent
 * @param {Function} setShowReadOnlyCourseNote
 * @param {string} courseName
 * @returns {JSX.Element}
 * @constructor
 */
const CourseName = ({
    courseIndex,
    course,
    longPressEvent,
    setShowReadOnlyCourseNote,
    courseName
}: PropInterface) => {
    const dispatch = useDispatch();

    return (
        <>
            <IconButton
                sx={{
                    fontSize: '1.3rem',
                    p: 1,
                    ml: -1.5
                }}
                onClick={() => dispatch(expandCourse(courseIndex))}
            >
                {course.open ? <AiFillCaretDown /> : <AiFillCaretRight />}
            </IconButton>

            {/* If the course name is longer than 28 characters then show the tooltip or else show the normal text */}
            {(course.name ? course.name : courseName).length > 25 ? (
                <TooltipWrapper title={course.name ? course.name : courseName} placement="bottom">
                    <Typography
                        {...longPressEvent}
                        variant="h6"
                        sx={{
                            fontWeight: 'bolder',
                            fontSize: '0.999rem !important',
                            cursor: 'pointer',
                            minWidth: '100%',
                            lineHeight: '35px',
                            '&:first-letter': {
                                textTransform: 'uppercase'
                            }
                        }}
                    >
                        {trimText(course.name ? course.name : courseName, 25)}

                        {course.note && (
                            <IconButton
                                sx={{
                                    fontSize: '1.35rem',
                                    top: -2.5,
                                    ml: 1,
                                    color: (theme) => theme.palette.info.main
                                }}
                                onClick={() => {
                                    setShowReadOnlyCourseNote(true);
                                }}
                            >
                                <AiOutlineComment />
                            </IconButton>
                        )}
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
                        minWidth: '100%',
                        lineHeight: '35px',
                        '&:first-letter': {
                            textTransform: 'uppercase'
                        }
                    }}
                >
                    {course.name ? course.name : courseName}

                    {course.note && (
                        <IconButton
                            sx={{
                                fontSize: '1.35rem',
                                top: -2.5,
                                ml: 1,
                                color: (theme) => theme.palette.info.main
                            }}
                            onClick={() => {
                                setShowReadOnlyCourseNote(true);
                            }}
                        >
                            <AiOutlineComment />
                        </IconButton>
                    )}
                </Typography>
            )}
        </>
    );
};

export default CourseName;
