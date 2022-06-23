import React from 'react';
import { Tooltip } from '@mui/material';

interface PropInterface {
    title: string;
    arrow?: boolean;
    placement?:
        | 'bottom'
        | 'bottom-end'
        | 'bottom-start'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top'
        | undefined;
    children: JSX.Element;
}

/**
 * Wrapper component for MUI tooltip
 * @param {string} title
 * @param {boolean | undefined} arrow
 * @param {"bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "left" |
 * "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top" | undefined} placement
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
const TooltipWrapper = ({
    title = 'Tooltip title',
    arrow = true,
    placement = 'bottom',
    children
}: PropInterface) => {
    return (
        <Tooltip title={title} placement={placement} arrow={arrow}>
            {children}
        </Tooltip>
    );
};
export default TooltipWrapper;
