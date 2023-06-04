import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Hero = props => {
    const { imageURL, title, children } = props;
    const renderHeroTitle = () => {
        return (
            <Box
                sx={{
                    background: "#00000040",
                    position: "absolute",
                    width: "100%",
                    left: 0,
                    top: 0,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: "white.main",
                        fontSize: "4rem!important",
                        "@media (max-width:600px)": {
                            fontSize: "1.6rem!important",
                        },
                    }}
                >
                    {title}
                </Typography>
            </Box>
        );
    };
    const renderContent = () => {
        if (title) {
            return renderHeroTitle();
        }
        if (children) {
            return children;
        }

        return null;
    };
    return (
        <Box sx={{ maxHeight: "inherit", position: "relative" }}>
            <img
                src={imageURL}
                alt=""
                style={{
                    width: "100%",
                    maxHeight: "inherit",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "blur(5px)",
                }}
            />
            {renderContent()}
        </Box>
    );
};

Hero.propTypes = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};

Hero.defaultProps = {
    imageURL: "",
    title: "",
    children: null,
};

export default Hero;
