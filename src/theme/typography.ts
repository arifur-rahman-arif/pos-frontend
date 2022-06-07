// ----------------------------------------------------------------------

/**
 *  Convert font size pixel value to rem value
 * @param {number} value
 * @returns {string}
 */
const pxToRem = (value: number): string => {
    return `${value / 16}rem`;
};

interface ResponsiveFontSizesInterface {
    sm: number;
    md: number;
    lg: number;
}

/**
 * Responsive font sizes function
 * @param {number} sm
 * @param {number} md
 * @param {number} lg
 * @returns {any}
 */
const responsiveFontSizes = ({ sm, md, lg }: ResponsiveFontSizesInterface) => {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm)
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md)
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg)
        }
    };
};

const FONT_PRIMARY = "'Work Sans'";

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 500,
    h1: {
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
        fontFamily: 'Poppins'
    },
    h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
        fontFamily: 'Poppins'
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
        fontFamily: 'Poppins'
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
        fontFamily: 'Poppins'
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
        fontFamily: 'Poppins'
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
        fontFamily: 'Poppins'
    },
    p: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
        fontFamily: 'Poppins'
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        fontFamily: 'Poppins'
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(15)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        letterSpacing: 1.1,
        textTransform: 'uppercase'
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: 'capitalize'
    }
};

export default typography;
