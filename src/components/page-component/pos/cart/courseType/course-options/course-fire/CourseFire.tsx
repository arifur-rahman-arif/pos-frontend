import dynamic from 'next/dynamic';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTimeInAMPMFormat } from '@/utils/global';
import { Course } from '@/features/cart/courseSlice';

const TimeKeeper = dynamic(() => import('react-timekeeper'), {
    ssr: false
});

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
    const [time, setTime] = useState<string>(
        getTimeInAMPMFormat(new Date(Date.now() + Number(course.preparationTime)))
    );

    /**
     * Handle the click of clock done/fire button
     */
    const handleClockFireClick = () => {
        setShowCourseFireComponent(false);

        setShowCourseOptions(false);
    };

    useEffect(() => {
        setTime(getTimeInAMPMFormat(new Date(Date.now() + Number(course.preparationTime))));
    }, [course.preparationTime]);

    return (
        <Stack sx={{ width: '100%' }}>
            <TimeKeeper
                time={time}
                onChange={(newTime) => setTime(newTime.formatted12)}
                switchToMinuteOnHourSelect
                doneButton={(newTime) => (
                    <div
                        onClick={handleClockFireClick}
                        style={{
                            textAlign: 'center',
                            padding: '10px 0',
                            borderTop: '1px solid #00AB55',
                            fontWeight: 'bolder',
                            fontSize: '16px',
                            color: '#637381',
                            cursor: 'pointer'
                        }}
                    >
                        Fire {courseName}
                    </div>
                )}
            />
        </Stack>
    );
};

export default CourseFire;
