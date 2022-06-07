/**
 * Overrides the Input component of MUI
 * @param {any} theme
 * @returns {{MuiInputBase: {styleOverrides: {input: {'&::placeholder': {color: any, opacity: number}},
 * root: {'&.Mui-disabled': {'& svg': {color: any}}}}},
 * MuiInput: {styleOverrides: {underline: {'&:before': {borderBottomColor: any}}}},
 * MuiOutlinedInput: {styleOverrides: {root: {'&.Mui-disabled': {'& .MuiOutlinedInput-notchedOutline': {borderColor: any}},
 * '& .MuiOutlinedInput-notchedOutline': {borderColor: any}}}},
 * MuiFilledInput: {styleOverrides: {underline: {'&:before': {borderBottomColor: any}},
 * root: {backgroundColor: any, '&.Mui-disabled': {backgroundColor: any},
 * '&:hover': {backgroundColor: any}, '&.Mui-focused': {backgroundColor: any}}}}}}
 * @constructor
 */
const Input = (theme: any) => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        '& svg': { color: theme.palette.text.disabled }
                    }
                },
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette.grey[300]
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[300],
                    '&:hover': {
                        backgroundColor: theme.palette.grey[300]
                    },
                    '&.Mui-focused': {
                        backgroundColor: theme.palette.action.focus
                    },
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette.grey[300]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.grey[300]
                    },
                    '&.Mui-disabled': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
};

export default Input;
