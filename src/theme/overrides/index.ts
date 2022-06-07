import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';

/**
 * Overrides the MUI component
 * @param {object} theme
 * @returns {any}
 * @constructor
 */
const ComponentsOverrides = (theme: object) => {
    return merge(
        Card(theme),
        Lists(theme),
        Paper(),
        Input(theme),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Typography(theme),
        IconButton(theme),
        Autocomplete(theme)
    );
};

export default ComponentsOverrides;
