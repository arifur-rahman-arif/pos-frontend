import React, { SyntheticEvent } from 'react';
import { IconButton, Tooltip, Zoom } from '@mui/material';
import { BsInfoCircle } from 'react-icons/bs';

interface CouponTooltipPropInterface {
    title: string;
    tooltip: boolean;
    setTooltip: any;
    onClose: (event: Event | SyntheticEvent<Element, Event>) => void;
}

/**
 * Coupon tooltip for input fields
 * @param {string} title
 * @param {TooltipInterface} tooltip
 * @param {Function} setTooltip
 * @param {any} onClose
 * @returns {JSX.Element}
 * @constructor
 */
const InfoTooltip = ({ title, tooltip, setTooltip, onClose }: CouponTooltipPropInterface): JSX.Element => (
    <Tooltip
        arrow
        placement="bottom"
        open={tooltip}
        onMouseEnter={setTooltip}
        onClick={setTooltip}
        onClose={onClose}
        TransitionComponent={Zoom}
        title={title}
    >
        <IconButton
            sx={{
                fontSize: '1.2rem',
                ml: 1
            }}
        >
            <BsInfoCircle />
        </IconButton>
    </Tooltip>
);

export default InfoTooltip;
