import React, { useEffect, useState } from 'react';
import { handleAlert } from '@/features/alert/alertSlice';
import { useDispatch } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Button, Stack, Typography } from '@mui/material';
import { Course, modifyCourseTimeDate } from '@/features/cart/courseSlice';
import { getRemainingTime } from '@/utils/global';

interface PropInterface {
    course: Course;
    courseIndex: number;
    setDialogueOpen: (value: boolean) => void;
}

/**
 * Course clock component along with remaining time
 * @param {Course} course
 * @param {number} courseIndex
 * @param {Function} setDialogueOpen
 * @returns {JSX.Element}
 * @constructor
 */
const Timer = ({ course, courseIndex, setDialogueOpen }: PropInterface) => {
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

        setDialogueOpen(false);
    };

    // Set the clock timer
    useEffect(() => {
        setTime(courseTimer as Date);
    }, [course]);

    /**
     * Handle the clock time change event
     * @param {Date | null} newTime
     */
    const onTimeChange = (newTime: Date | null) => {
        try {
            if ((newTime as Date)?.getHours() < 12) {
                (newTime as Date).setDate((newTime as Date).getDate() + 1);
            }

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

    // Set the remaining timer
    useEffect(() => {
        const myInterval = setInterval(() => {
            if (timeValid) {
                setRemainingTime(
                    getRemainingTime(
                        course.modifiedPreparationDateTime
                            ? new Date(course.modifiedPreparationDateTime) // eslint-disable-line
                            : time
                    )
                );
            } else {
                setRemainingTime('0h:0m:0s');
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [course, time, timeValid]);

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
                    flexDirection: 'column',
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

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
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
            </div>
        </Stack>
    );
};

export default Timer;
