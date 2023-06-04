import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import LogoImageURL from "../../assets/Logo.png";
import { GradientButton } from "../../styles/home";
import { Hidden } from "@mui/material";

const pages = [
    { url: "/pizza-list", label: "Menus" },
    { url: "/pizza-list", label: "Location" },
    { url: "/pizza-list", label: "About" },
];

const orderOptions = [
    { url: "/pizza-list", label: "Order Now" },
    { url: "/order", label: "Track Order" },
];

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar
            position="static"
            sx={{
                height: "5rem",
                boxShadow: "0px 2px 3px #000",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <Link to="/">
                            <img
                                src={LogoImageURL}
                                alt="Sliceline logo"
                                style={{ maxHeight: "5rem" }}
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none",
                                justifyContent: "flex-end",
                            },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {[...orderOptions, ...pages].map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => {
                                        navigate(page.url);
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: { xs: "none", md: "flex", gap: "5%" },
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                color="error"
                                onClick={() => {
                                    navigate(page.url);
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    fontWeight: 800,
                                    display: "block",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    <Hidden mdDown>
                        <GradientButton onClick={() => navigate("/pizza-list")}>
                            Order Now
                        </GradientButton>
                        <Button
                            onClick={() => navigate("/orders")}
                            variant="outlined"
                            color="error"
                            sx={{ ml: 3 }}
                        >
                            Track Your Order
                        </Button>
                    </Hidden>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(setting => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
