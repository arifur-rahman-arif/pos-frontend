import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Course, modifyCourseTimeDate } from '@/features/cart/courseSlice';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { getRemainingTime } from '@/utils/global';

interface PropInterface {
    courseIndex: number;
    course: Course;
    courseName: string;
    setShowCourseFireComponent: (param: boolean) => void;
    setShowCourseOptions: (param: boolean) => void;
}

/**
 * Course fire component for the fire action of a course
 * @returns {JSX.Element}
 * @constructor
 */
const CourseFire = ({
    courseIndex,
    course,
    courseName,
    setShowCourseFireComponent,
    setShowCourseOptions
}: PropInterface) => {
    const dispatch = useDispatch();

    const preparationTime = new Date(Date.now() + Number(course.preparationTime || 0));

    const courseTimer = // eslint-disable-line
        course.modifiedPreparationDateTime
            ? new Date(course.modifiedPreparationDateTime) // eslint-disable-line
            : preparationTime;

    const [time, setTime] = useState<Date>(courseTimer);

    const [timeValid, setTimeValid] = useState<boolean>(true);

    const [remainingTime, setRemainingTime] = useState<string>(getRemainingTime(courseTimer));

    /**
     * Handle the click of clock done/fire button
     */
    const handleClockFireClick = () => {
        dispatch(
            modifyCourseTimeDate({
                courseIndex: courseIndex,
                modifiedTimeDate: time.toString()
            })
        );

        setShowCourseFireComponent(false);

        setShowCourseOptions(false);
    };

    /**
     * Handle the clock time change event
     * @param {Date | null} newTime
     */
    const onTimeChange = (newTime: Date | null) => {
        try {
            console.log(newTime);

            const changedDateTime = new Date(newTime as Date)?.getTime() as number;

            const preparationDateTime = preparationTime.getTime() as number;

            // If changedDateTime is less than preparationDateTime than its invalid time
            if (changedDateTime - preparationDateTime < 0) {
                setTimeValid(false);

                throw new Error("Preparation time can't be less than total item preparation time");
            } else {
                setTimeValid(true);
            }

            setTime(newTime as Date);
        } catch (error: any) {
            console.error(error);
            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    /**
     * Reset the course timer to its initial state
     */
    const onResetHandleClick = () => {
        setTime(new Date(Date.now() + Number(course.preparationTime || 0)));

        setTimeValid(true);
    };

    useEffect(() => {
        const myInterval = setInterval(() => {
            setRemainingTime(getRemainingTime(time));
        }, 100);

        return () => {
            clearInterval(myInterval);
        };
    }, [course, time]);

    return (
        <Stack sx={{ width: '100%' }}>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                sx={{
                    width: '100%',
                    '& .MuiPickerStaticWrapper-root': {
                        width: '100%'
                    }
                }}
            >
                <StaticTimePicker
                    displayStaticWrapperAs="mobile"
                    value={time}
                    onChange={onTimeChange}
                    renderInput={(params) => <></>}
                />
            </LocalizationProvider>

            <div
                style={{
                    textAlign: 'center',
                    fontWeight: 'bolder',
                    fontSize: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '8px',
                    marginBottom: '8px'
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        flex: '100%',
                        fontWeight: 'bolder',
                        fontSize: '1.2rem',
                        color: (theme) => theme.palette.primary.main
                    }}
                >
                    {remainingTime}
                </Typography>

                <Button
                    variant="outlined"
                    color={timeValid ? 'primary' : 'error'}
                    size="small"
                    onClick={() => {
                        timeValid ? handleClockFireClick() : '';
                    }}
                    sx={{
                        cursor: timeValid ? 'pointer' : 'not-allowed'
                    }}
                >
                    {timeValid ? `Fire ${courseName}` : 'Invalid time'}
                </Button>

                <Button variant="outlined" size="small" onClick={onResetHandleClick}>
                    Reset
                </Button>

                <Button variant="outlined" size="small" onClick={() => setShowCourseFireComponent(false)}>
                    Back
                </Button>
            </div>
        </Stack>
    );
};

export default CourseFire;
