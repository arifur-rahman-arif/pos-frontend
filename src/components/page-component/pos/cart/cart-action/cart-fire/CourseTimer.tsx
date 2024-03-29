import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { BiTimeFive } from 'react-icons/bi';
import { getTimeInAMPMFormat } from '@/utils/global';
import { Course } from '@/features/cart/courseSlice';
import Timer from '@/components/page-component/pos/cart/cart-action/cart-fire/Timer';

interface PropInterface {
    course: Course;
    courseIndex: number;
}

/**
 * Course component that shows the course fire timer
 * @param {Course} course
 * @param {number} courseIndex
 * @returns {JSX.Element}
 * @constructor
 */
const CourseTimer = ({ course, courseIndex }: PropInterface) => {
    const preparationTime = new Date(Date.now() + Number(course.preparationTime || 0));

    const courseTimer = // eslint-disable-line
        course.modifiedPreparationDateTime
            ? new Date(course.modifiedPreparationDateTime) // eslint-disable-line
            : preparationTime;

    const [dialogueOpen, setDialogueOpen] = useState<boolean>(false);

    const [timer, setTimer] = useState<Date>(courseTimer);

    // Update the course timer in every second when course data is updated
    useEffect(() => {
        const myInterval = setInterval(() => {
            setTimer(
                course.modifiedPreparationDateTime
                    ? new Date(course.modifiedPreparationDateTime) // eslint-disable-line
                    : new Date(Date.now() + Number(course.preparationTime || 0))
            );
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [course, timer]);

    return (
        <>
            <Stack
                gap={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ cursor: 'pointer' }}
                onClick={() => setDialogueOpen(true)}
            >
                <IconButton
                    sx={{
                        fontSize: '1.7rem',
                        color: (theme) => theme.palette.primary.main,
                        ml: -1.5
                    }}
                >
                    <BiTimeFive />
                </IconButton>

                <Typography
                    variant="body1"
                    sx={{
                        whiteSpace: 'nowrap',
                        mt: 0.15,
                        fontSize: '1.1rem',
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 'bolder'
                    }}
                >
                    {getTimeInAMPMFormat(timer)}
                </Typography>
            </Stack>

            <Dialog
                open={dialogueOpen}
                onClose={() => {
                    setDialogueOpen(false);
                }}
            >
                <DialogTitle sx={{ p: 2.5 }}>{course.name || `Course ${courseIndex + 1}`}</DialogTitle>

                <Stack
                    sx={{
                        px: 2.5,
                        pt: 0,
                        pb: 2.5
                    }}
                >
                    <Timer course={course} courseIndex={courseIndex} setDialogueOpen={setDialogueOpen} />
                </Stack>
            </Dialog>
        </>
    );
};

export default CourseTimer;
