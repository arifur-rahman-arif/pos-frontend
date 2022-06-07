/**
 * Overrides the typography component of MUI
 * @param {any} theme
 * @returns {{MuiTypography: {styleOverrides: {paragraph: {marginBottom: any}, gutterBottom: {marginBottom: any}}}}}
 * @constructor
 */
const Typography = (theme: any) => {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
};

export default Typography;
