import React, { useEffect, useState } from 'react';
import { handleAlert } from '@/features/alert/alertSlice';
import { useDispatch } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Button, Stack } from '@mui/material';
import { Course, modifyCourseTimeDate } from '@/features/cart/courseSlice';

interface PropInterface {
    course: Course;
    courseIndex: number;
    setDialogueOpen: (value: boolean) => void;
}

const Timer = ({ course, courseIndex, setDialogueOpen }: PropInterface) => {
    const dispatch = useDispatch();

    const preparationTime = new Date(Date.now() + Number(course.preparationTime || 0));

    const courseTimer = // eslint-disable-line
        course.modifiedPreparationDateTime
            ? new Date(course.modifiedPreparationDateTime) // eslint-disable-line
            : preparationTime;

    const [time, setTime] = useState<Date>(courseTimer);

    const [timeValid, setTimeValid] = useState<boolean>(true);

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

        setDialogueOpen(false);
    };

    useEffect(() => {
        setTime(courseTimer);
    }, [course]);

    /**
     * Handle the clock time change event
     * @param {Date | null} newTime
     */
    const onTimeChange = (newTime: Date | null) => {
        try {
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

    return (
        <Stack sx={{ width: '100%', px: 3 }}>
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
                    {timeValid ? `Save Time` : 'Invalid time'}
                </Button>

                <Button variant="outlined" size="small" onClick={onResetHandleClick}>
                    Reset
                </Button>

                <Button variant="outlined" size="small" onClick={() => setDialogueOpen(false)}>
                    Back
                </Button>
            </div>
        </Stack>
    );
};

export default Timer;
