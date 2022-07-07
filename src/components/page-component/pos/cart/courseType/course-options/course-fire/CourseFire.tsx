import dynamic from 'next/dynamic';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { getDateFromTimeString, getTimeInAMPMFormat } from '@/utils/global';
import { Course } from '@/features/cart/courseSlice';
import { TimeOutput } from 'react-timekeeper';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

interface PropInterface {
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
    course,
    courseName,
    setShowCourseFireComponent,
    setShowCourseOptions
}: PropInterface) => {
    const dispatch = useDispatch();

    const [time, setTime] = useState<Date>(new Date(Date.now() + Number(course.preparationTime || 0)));

    const [timeValid, setTimeValid] = useState<boolean>(true);

    /**
     * Handle the click of clock done/fire button
     */
    const handleClockFireClick = () => {
        setShowCourseFireComponent(false);

        setShowCourseOptions(false);
    };

    useEffect(() => {
        setTime(new Date(Date.now() + Number(course.preparationTime || 0)));
    }, [course]);

    /**
     * Handle the clock time change event
     * @param {TimeOutput} newTime
     */
    const onTimeChange = (newTime: Date | null) => {
        try {
            const changedDateTime = newTime?.getTime() as number;

            const preparationDateTime = time?.getTime() as number;

            if (changedDateTime < preparationDateTime) {
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
    };

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
                    Cancel
                </Button>
            </div>
        </Stack>
    );
};

export default CourseFire;
