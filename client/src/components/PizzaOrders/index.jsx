import PropTypes from "prop-types";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { ORDER_STEPS } from "../../constants";
import { convertSecondsToMinutesAndSeconds } from "../../utils";

const OrderedPizza = props => {
    const { orderedItems } = props;
    const getActiveStep = pizza => {
        const activeIndex = ORDER_STEPS.findIndex(
            item => item.key === pizza.state
        );
        if (activeIndex > -1) {
            return activeIndex + 1;
        }
        return 0;
    };

    const renderToppings = (topping, index) => {
        return (
            <Chip
                label={topping.label}
                size="small"
                key={index}
                sx={{ borderRadius: 1 }}
            />
        );
    };

    const renderStepper = pizza => {
        return ORDER_STEPS.map((option, index) => {
            const activeStep = getActiveStep(pizza);
            const isActive = activeStep < index;
            const sxProps = {
                "& svg, & .MuiStepLabel-label": {
                    color: activeStep > index ? "green" : "inherit",
                },
            };
            return (
                <Step key={option.key} sx={sxProps}>
                    <StepLabel>
                        {isActive < index ? option.initial : option.final}
                    </StepLabel>
                </Step>
            );
        });
    };

    return orderedItems.map(pizza => (
        <Box
            key={pizza.id}
            sx={{
                "&:not(:last-child)": {
                    borderBottom: "1px #D5D9D9 solid",
                },
            }}
        >
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                }}
            >
                <Box
                    component={"img"}
                    src={pizza.image}
                    alt=""
                    sx={{
                        width: "6rem",
                        height: "6rem",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: 5,
                    }}
                />
                <Box sx={{ px: 2 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "secondary.main",
                            textTransform: "uppercase",
                        }}
                    >
                        {pizza.name}
                    </Typography>
                    <Box>
                        <Typography
                            variant="caption"
                            sx={{ color: "primary.main" }}
                        >
                            {pizza.description}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{ color: "primary.main", mt: 1.5 }}
                    >
                        <b>Size:</b> {pizza.size}
                    </Typography>
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: "primary.main",
                            }}
                        >
                            Toppings:
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {pizza.toppings.map(renderToppings)}
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ my: 4 }}>
                <Box>
                    <Stepper activeStep={getActiveStep(pizza)}>
                        {renderStepper(pizza)}
                    </Stepper>
                    {pizza?.state === "Done" && pizza?.timeTaken ? (
                        <Typography variant="subtitle1">
                            Total Time Taken{" "}
                            {convertSecondsToMinutesAndSeconds(
                                pizza?.timeTaken
                            )}
                        </Typography>
                    ) : null}
                </Box>
            </Box>
        </Box>
    ));
};

OrderedPizza.propTypes = {
    orderedItems: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.number.isRequired,
            finalPrice: PropTypes.number,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            toppings: PropTypes.array,
            email: PropTypes.string,
        })
    ),
};

OrderedPizza.defaultProps = {
    orderedItems: [],
};

export default OrderedPizza;
