import { replace } from 'lodash';
import numeral from 'numeral';
import { format, formatDistanceToNow } from 'date-fns';

/**
 * Validate an email by regular expression
 * @param {string} email
 * @returns {RegExpMatchArray | null}
 */
export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            // eslint-disable-next-line max-len
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

/**
 * Function for shorten a number
 * @param {number} number
 * @returns {string}
 */
export const fShortenNumber = (number: number) => {
    return replace(numeral(number).format('0.00a'), '.00', '');
};

/**
 * Format the data
 * @param {number} number
 * @returns {string}
 */
export const fData = (number: number) => {
    return numeral(number).format('0.0 b');
};

/**
 * Format the given date
 * @param {Date} date
 * @returns {string}
 */
export const fDate = (date: Date) => {
    return format(new Date(date), 'dd MMMM yyyy');
};

/**
 * Format the given date time
 * @param {Date} date
 * @returns {string}
 */
export const fDateTime = (date: Date) => {
    return format(new Date(date), 'dd MMM yyyy HH:mm');
};

/**
 * Format the date time suffix
 * @param {Date} date
 * @returns {string}
 */
export const fDateTimeSuffix = (date: Date) => {
    return format(new Date(date), 'dd/MM/yyyy hh:mm p');
};

/**
 * Format the time for now
 * @param {Date} date
 * @returns {string}
 */
export const fToNow = (date: Date) => {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true
    });
};

/**
 * Trim the text to a specified length with ...
 * @param {string} text
 * @param {number} char
 * @returns {string}
 */
export const trimText = (text: string, char: number): string => {
    const length = char;

    return text.length > length ? text.substring(0, length - 3) + '...' : text;
};

export const SITE_NAME = 'Cloud POS';

export const acceptedImageTypes = ['image/webp', 'image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];

/**
 * Get the time in 00:00am format
 * @param {Date} date
 * @returns {string}
 */
export const getTimeInAMPMFormat = (date: Date): string => {
    let hours = date.getHours();

    let minutes: string | number = date.getMinutes();

    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;

    hours = hours ? hours : 12; // The hour '0' should be '12'

    minutes = minutes < 10 ? '0' + minutes : minutes;

    const strTime = hours + ':' + minutes + ampm;

    return strTime;
};
