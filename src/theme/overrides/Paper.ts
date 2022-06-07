/**
 * Overrides the Paper
 * @returns {{MuiPaper: {defaultProps: {elevation: number},
 * styleOverrides: {root: {backgroundImage: string}}}}}
 * @constructor
 */
const Paper = () => {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },

            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        }
    };
};

export default Paper;
