import InteractiveComponent from './InteractiveComponent';
import { Stack } from '@mui/material';
import WaitingComponent from './waiting-component/WaitingComponent';

/**
 * Main component of the left part of kitchen screen
 * @returns {JSX.Element}
 * @constructor
 */
const LeftComponent = () => {
    return (
        <Stack gap={3} justifyContent="flex-start" alignItems="flex-start">
            <InteractiveComponent />

            <WaitingComponent />
        </Stack>
    );
};

export default LeftComponent;
