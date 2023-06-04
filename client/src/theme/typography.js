export const fontSizePxToRem = px => `${(px * 4) / 64}rem`;
export const letterSpacingPxToEm = px => `${px / 15}em`;

const variantTypography = {
    fontFamily: [
        "Nunito",
        "Raleway",
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),

    h1: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(38),
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: letterSpacingPxToEm(0.33),
    },
    h2: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(30),
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: letterSpacingPxToEm(0.23),
        "@media (max-width:600px)": {
            fontSize: fontSizePxToRem(18),
        },
    },
    h3: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(28),
        fontWeight: 500,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.36),
    },
    h4: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(17),
        fontWeight: 500,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.34),
    },
    h5: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(14),
        fontWeight: 700,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.26),
    },
    h6: {
        fontFamily: "Raleway",
        fontSize: fontSizePxToRem(12),
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.12),
    },
    caption: {
        fontFamily: "Montserrat",
        fontSize: fontSizePxToRem(14),
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.12),
    },
    subtitle1: {
        fontFamily: "Montserrat",
        fontSize: fontSizePxToRem(12),
        fontWeight: 300,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.12),
    },
    subtitle2: {
        fontFamily: "Montserrat",
        fontSize: fontSizePxToRem(11),
        fontWeight: 300,
        lineHeight: 1.33,
        letterSpacing: letterSpacingPxToEm(0.12),
    },
};

export const appTypography = {
    ...variantTypography,
};
