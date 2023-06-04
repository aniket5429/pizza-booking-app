import { Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FOOTER_SERVICES_OPTIONS } from "../../constants/index";

const Footer = () => {
    const renderList = (options = []) => {
        if (!options.length) {
            return null;
        }
        return options.map((item, index) => (
            <Typography key={index} sx={{ mb: 2, color: "text.100" }}>
                {item}
            </Typography>
        ));
    };

    return (
        <Box sx={{ background: "#252525", py: 10, px: 5 }}>
            <Grid container>
                <Grid item xs={12} md={6} lg={3} columnGap={3}>
                    <Typography sx={{ color: "text.100" }}>ABOUT US</Typography>
                    <Typography sx={{ color: "text.100", mt: 4 }}>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ mb: 4, color: "text.100" }}>
                        SERVICES
                    </Typography>
                    {renderList(FOOTER_SERVICES_OPTIONS)}
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box>
                        <Typography sx={{ color: "text.100" }}>
                            POLICEIS
                        </Typography>
                        <Typography sx={{ mt: 4, color: "text.100" }}>
                            Privacy Policy
                        </Typography>
                        <Typography sx={{ mt: 2, color: "text.100" }}>
                            Terms & Conditions
                        </Typography>
                        <Typography sx={{ mt: 2, color: "text.100" }}>
                            Sitemap
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ color: "text.100" }}>
                        HAVE A QUESTION
                    </Typography>
                    <Box sx={{ color: "text.100", mt: 4 }}>
                        <Grid container alignItems="center" columnGap={2}>
                            <LocationOnIcon />
                            <Typography sx={{ color: "text.100" }}>
                                Al Muroor, <br /> Al Dafra Street, <br /> Abu
                                Dhabu, United Arab Emirates
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            columnGap={2}
                            sx={{ my: 2 }}
                        >
                            <PhoneIcon />
                            <Typography sx={{ color: "text.100" }}>
                                +971-581397670
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center" columnGap={2}>
                            <EmailIcon />
                            <Typography sx={{ color: "text.100" }}>
                                aniket9011032@gmail.com
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
