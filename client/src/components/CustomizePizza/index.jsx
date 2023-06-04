import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { Box, Grid, FormControl, IconButton, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PIZZA_TOPPINGS } from "../../constants";
import actionTypes from "../../actions/actionTypes";

const CustomizePizza = props => {
    const { pizza } = props;
    const dispatch = useDispatch();
    const [size, setSize] = useState("small");
    const [currentPrice, setPizzaCurrentPrice] = useState(
        pizza?.finalPrice ?? pizza.price
    );

    useEffect(() => {
        let pizzaPrice = pizza.price;
        if (size === "medium") {
            pizzaPrice = pizzaPrice * 1.5;
        } else if (size === "large") {
            pizzaPrice = pizzaPrice * 1.75;
        }
        pizzaPrice = pizzaPrice.toFixed(2);
        setPizzaCurrentPrice(Number(pizzaPrice));
        if (pizza.finalPrice !== pizzaPrice) {
            dispatch({
                type: actionTypes.UPDATE_PIZZA_IN_CART,
                payload: {
                    ...pizza,
                    size,
                    finalPrice: Number(pizzaPrice),
                },
            });
        }
    }, [size, dispatch, pizza.price, pizza.finalPrice]);

    function decreaseQuantity() {
        if (quantity > 2) {
            setQuantity(state => state - 1);
        }
    }

    const removeItemFromCart = () => {
        dispatch({
            type: actionTypes.REMOVE_PIZZA_FROM_CART,
            payload: {
                pizzaId: pizza.id,
            },
        });
    };

    const renderToppings = () => {
        return (
            <Select
                value={pizza.toppings}
                isMulti
                name="Toppings"
                onChange={val => {
                    dispatch({
                        type: actionTypes.UPDATE_PIZZA_IN_CART,
                        payload: {
                            ...pizza,
                            toppings: val,
                        },
                    });
                }}
                options={PIZZA_TOPPINGS}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    };

    const renderPizzaSizeOption = (item, index) => {
        const color = item === size ? "secondary.main" : "white.main";
        const sx = {
            color,
            "& svg": {
                color,
            },
        };
        return (
            <FormControlLabel
                size="small"
                key={index}
                value={item}
                control={<Radio size="small" sx={sx} />}
                label={item.toUpperCase()}
                sx={sx}
            />
        );
    };

    const renderPizzaSize = () => {
        return (
            <FormControl>
                <RadioGroup
                    color="secondary.main"
                    row
                    onChange={(event, val) => {
                        setSize(val);
                    }}
                    value={size}
                    name="row-radio-buttons-group"
                >
                    {["small", "medium", "large"].map(renderPizzaSizeOption)}
                </RadioGroup>
            </FormControl>
        );
    };

    return (
        <Grid container sx={{ backgroundColor: "#000000bf", borderRadius: 5 }}>
            <Grid item xs={12} lg={6} sx={{ position: "relative" }}>
                <Box sx={{ height: "100%", display: "flex" }}>
                    <IconButton
                        onClick={removeItemFromCart}
                        sx={{
                            position: "absolute",
                            top: "2%",
                            left: "2%",
                            backgroundColor: "primary.main",
                        }}
                    >
                        <DeleteForeverIcon color="error" />
                    </IconButton>
                    <Box
                        component={"img"}
                        src={pizza.image}
                        alt=""
                        sx={{
                            width: "100%",
                            maxHeight: "20rem",
                            height: "100%",
                            objectFit: "cover",
                            margin: "auto",
                            objectPosition: "center",
                            borderRadius: 5,
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Box sx={{ px: "5%", py: 2 }}>
                    <Typography
                        variant="h3"
                        sx={{ color: "text.main", textTransform: "uppercase" }}
                    >
                        {pizza.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.white" }}>
                        {pizza.description}
                    </Typography>

                    <Box sx={{ mt: 2 }}>{renderPizzaSize()}</Box>

                    <Box sx={{ mt: 2 }}>
                        <Typography
                            variant="caption"
                            sx={{
                                mb: 4,
                                color: "white.main",
                                fontWeight: "bold",
                            }}
                        >
                            Toppings
                        </Typography>
                        <Box sx={{ mt: 1 }}>{renderToppings()}</Box>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Grid container alignItems={"center"} flexWrap="noWrap">
                            <Grid item xs={12} sm={12} lg={6}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: "text.white",
                                            textAlign: "right",
                                        }}
                                    >
                                        AED {currentPrice}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

CustomizePizza.propTypes = {
    pizza: PropTypes.shape({
        price: PropTypes.number.isRequired,
        finalPrice: PropTypes.number,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        toppings: PropTypes.array,
        email: PropTypes.string,
    }).isRequired,
};

CustomizePizza.defaultProps = {
    pizza: {},
};

export default CustomizePizza;
