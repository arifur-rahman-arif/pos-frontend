/**
 * Overrides the Autocomplete of MUI component
 * @param {any} theme
 * @returns {{MuiAutocomplete: {styleOverrides: {paper: {boxShadow: string}}}}}
 * @constructor
 */
const Autocomplete = (theme: any) => {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z20
                }
            }
        }
    };
};

export default Autocomplete;
