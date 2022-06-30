import { useCallback, useRef, useState } from 'react';

// eslint-disable-next-line valid-jsdoc
/**
 * Long press custom hook for hold/long press events
 * @param onLongPress
 * @param onClick
 * @returns {{onTouchStart: (e: any) => void,
 * onTouchEnd: (e: any) => void, onMouseUp: (e: any) => void, onMouseLeave: (e: any) => void, onMouseDown: (e: any) => void}}
 */
const useLongPress = (onLongPress: any, onClick: any = () => {}) => {
    const shouldPreventDefault = false;
    const delay = 400;

    const [longPressTriggered, setLongPressTriggered] = useState(false);

    const timeout: any = useRef();

    const target: any = useRef();

    const start = useCallback(
        (event: any) => {
            if (shouldPreventDefault && event.target) {
                event.target.addEventListener('touchend', preventDefault, {
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                onLongPress(event);
                setLongPressTriggered(true);
            }, delay);
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (event: any, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current);

            shouldTriggerClick && !longPressTriggered && onClick();

            setLongPressTriggered(false);

            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener('touchend', preventDefault);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: (e: any) => start(e),
        onTouchStart: (e: any) => start(e),
        onMouseUp: (e: any) => clear(e),
        onMouseLeave: (e: any) => clear(e, false),
        onTouchEnd: (e: any) => clear(e)
    };
};

/**
 * Check if this is a touch event or not
 * @param {React.MouseEvent<HTMLButtonElement>} event
 * @returns {boolean}
 */
const isTouchEvent = (event: TouchEvent) => {
    return 'touches' in event;
};

/**
 * Prevent the default behavior of touch or click event
 * @param {any} event
 */
const preventDefault = (event: any) => {
    if (!isTouchEvent(event)) return;

    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};

export default useLongPress;
