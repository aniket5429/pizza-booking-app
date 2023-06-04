import { useState } from "react";
import PropTypes from "prop-types";

import { Box, Typography, TextField, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LogoImageURL from "../../assets/Logo.png";
import { GradientButton, CartBox } from "../../styles/home";

const CartOrderSection = ({ totalPrice, feedbackSection, callback }) => {
    const [state, setState] = useState("");
    return (
        <CartBox
            sx={{
                borderRadius: 5,
                py: 3,
                px: 3,
            }}
        >
            <img
                src={LogoImageURL}
                alt="Sliceline logo"
                style={{
                    maxHeight: "5rem",
                    display: "block",
                    margin: "auto",
                }}
            />

            <Box
                sx={{
                    backgroundColor: "error.main",
                    py: 4,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "white.main",
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontSize: "1rem",
                    }}
                >
                    Love Sliceline deals and early access?
                    <br />
                    Join our pizza club!
                </Typography>
            </Box>
            {!feedbackSection && (
                <Box
                    sx={{
                        mt: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white.main",
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: "1.4rem",
                        }}
                    >
                        YOUR ORDER
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white.main",
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: "1.4rem",
                        }}
                    >
                        AED {totalPrice.toFixed(2)}
                    </Typography>
                </Box>
            )}
            <Box sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    value={state}
                    multiline={feedbackSection}
                    rows={4}
                    onChange={({ target }) => setState(target.value)}
                    placeholder={
                        feedbackSection
                            ? "Submit your feedback"
                            : "ENTER COUPAN CODE"
                    }
                    sx={{ background: "white" }}
                />
                <GradientButton
                    fullWidth
                    sx={{ mt: 4, mb: 2 }}
                    onClick={callback}
                >
                    {feedbackSection ? "SUBMIT FEEDBACK" : "PLACE ORDER"}
                </GradientButton>
                <Button
                    fullWidth
                    sx={{ backgroundColor: "white.main" }}
                    startIcon={<CallIcon />}
                >
                    CLICK HERE TO CALL US
                </Button>
            </Box>
        </CartBox>
    );
};
CartOrderSection.propTypes = {
    totalPrice: PropTypes.number,
    callback: PropTypes.func,
    feedbackSection: PropTypes.bool,
};

CartOrderSection.defaultProps = {
    totalPrice: 0,
    callback: console.log,
    feedbackSection: false,
};

export default CartOrderSection;
