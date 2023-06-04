import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { appLightPalette, appLightColors } from "./lightPalette";
import { appDarkPalette, appDarkColors } from "./darkPalette";
import { appTypography } from "./typography";

// Create a theme instance.
const theme = (mode = "dark") =>
    responsiveFontSizes(
        createTheme({
            typography: appTypography,
            palette:
                mode === "light"
                    ? { ...appLightPalette, type: "light" }
                    : { ...appDarkPalette, type: "dark" },
            colors: mode === "light" ? appLightColors : appDarkColors,
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920,
                },
            },
            overrides: {
                MUIRichTextEditor: {
                    root: {
                        width: "100%",
                    },
                    toolbar: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                    },
                    editorContainer: {
                        borderRadius: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "3%",
                        paddingTop: "3%",
                        paddingRight: "3%",
                        minHeight: "120px",
                    },
                },
                MuiInputLabel: {
                    root: {
                        whiteSpace: "nowrap",
                    },
                },
                MuiCssBaseline: {
                    "@global": {
                        ".thumbnail": {
                            maxWidth: "5rem",
                            borderRadius: "10px",
                            margin: "0.6rem 0",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            maxHeight: "3.5rem",
                        },
                        "MuiIconButton-colorSecondary": {
                            // color: mode === 'light' ? 'rgba(0, 0, 0, 0.54)': '#fff'
                            color: "#fff",
                        },
                        "MuiTextField-root": {
                            width: "100%",
                        },
                    },
                },
            },
        })
    );

export default theme;
