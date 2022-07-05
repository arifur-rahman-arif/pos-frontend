import dynamic from 'next/dynamic';
import { Stack } from '@mui/material';

const TimeKeeper = dynamic(() => import('react-timekeeper'), {
    ssr: false
});
/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CourseFire = () => {
    return (
        <Stack>
            <TimeKeeper />
        </Stack>
    );
};

export default CourseFire;
