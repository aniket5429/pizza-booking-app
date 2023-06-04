import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";

const SectionTitles = ({ title }) => {
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    background: "linear-gradient(to right, #FF4B2B, #FF416C)",
                    width: "75%",
                    borderRadius: 3,
                    height: 3,
                }}
            />
            <Typography
                variant="h2"
                sx={{
                    background: "white",
                    zIndex: 20,
                    padding: "0 2%",
                    borderRadius: 5,
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

SectionTitles.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

SectionTitles.defaultProps = {
    title: "",
    children: null,
};
export default SectionTitles;
