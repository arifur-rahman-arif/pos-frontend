import { Button, Stack } from '@mui/material';
import { AiFillPrinter } from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { MdOutlineFrontHand } from 'react-icons/md';
import { GiCampCookingPot } from 'react-icons/gi';
import { Box } from '@mui/system';

/**
 * Cart action component for handling the cart
 * @returns {JSX.Element}
 * @constructor
 */
const CartAction = () => {
    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                p: 2,
                mb: 1
            }}
        >
            <TooltipWrapper title="Print the cart" placement="top">
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '1.7rem',
                        p: 2,
                        width: 65,
                        height: 48,
                        borderRadius: '15px'
                    }}
                >
                    <AiFillPrinter />
                </Button>
            </TooltipWrapper>

            <TooltipWrapper title="Send the order to kitchen" placement="top">
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '1.7rem',
                        p: 2,
                        width: 65,
                        height: 48,
                        borderRadius: '15px'
                    }}
                >
                    <GiCampCookingPot />
                </Button>
            </TooltipWrapper>

            <Box
                sx={{
                    ml: 'auto'
                }}
            >
                <TooltipWrapper title="Hold the order" placement="top">
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '1.7rem',
                            p: 2,
                            width: 65,
                            height: 48,
                            borderRadius: '15px'
                        }}
                    >
                        <MdOutlineFrontHand />
                    </Button>
                </TooltipWrapper>
            </Box>
        </Stack>
    );
};

export default CartAction;
