import { Fragment } from "react";
import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";
import Header from "../Header";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
    const activeTheme = "dark";
    return (
        <Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme(activeTheme)}>
                <SnackbarProvider>
                    <Header />
                    {children}
                    <Footer />
                </SnackbarProvider>
            </ThemeProvider>
        </Fragment>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

AppLayout.defaultProps = {
    children: null,
};
export default AppLayout;
