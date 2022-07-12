import { useState } from 'react';
import { TooltipWrapper } from '@/components/page-component';
import { Button, Dialog, DialogActions, DialogProps, DialogTitle } from '@mui/material';
import { ImFire } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { CourseSliceStateInterface } from '@/features/cart/courseSlice';
import Course from './Course';
import { Box } from '@mui/system';

/**
 * Cart fire component for firing the whole cart at once
 * @returns {JSX.Element}
 * @constructor
 */
const CartFire = () => {
    const [dialogueOpen, setDialogueOpen] = useState<boolean>(false);

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    const [maxWidth] = useState<DialogProps['maxWidth']>('md');

    return (
        <>
            <TooltipWrapper title="Send the order to kitchen" placement="top">
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '1.5rem',
                        p: 2,
                        width: 65,
                        height: 48,
                        borderRadius: '15px'
                    }}
                    onClick={() => setDialogueOpen(true)}
                >
                    <ImFire />
                </Button>
            </TooltipWrapper>

            <Dialog
                maxWidth={maxWidth}
                open={dialogueOpen}
                onClose={() => {
                    setDialogueOpen(false);
                }}
            >
                <DialogTitle sx={{ p: 2.5 }}>Fire order</DialogTitle>

                <Box
                    sx={{
                        px: 2.5,
                        pt: 0,
                        pb: 1,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: 2,
                        maxWidth: '700px'
                    }}
                >
                    {courses.length > 0 && // eslint-disable-line
                        courses.map((course, index) => (
                            <Course key={index} course={course} courseIndex={index} />
                        ))}
                </Box>

                <DialogActions sx={{ p: 2.5, gap: 1 }}>
                    <Button variant="contained" size="small">
                        Yes
                    </Button>

                    <Button variant="outlined" size="small" onClick={() => setDialogueOpen(false)}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CartFire;
