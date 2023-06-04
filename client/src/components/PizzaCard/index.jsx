import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import { GradientButton } from "../../styles/home";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../../actions/actionTypes";

const PizzaCard = ({ pizza }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Card
                sx={{
                    maxWidth: "100%",
                    borderTopLeftRadius: 40,
                    transition: "transform 0.5s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <CardMedia
                    sx={{ height: 200, borderBottomRightRadius: 40 }}
                    image={pizza.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {pizza.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ height: "3rem" }}
                    >
                        {pizza.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-start" }}>
                    <Button size="small" variant="error">
                        PRICE: AED {pizza.price}
                    </Button>

                    <Link to={`/cart`}>
                        <GradientButton
                            onClick={() =>
                                dispatch({
                                    type: actionTypes.ADD_PIZZA_TO_CART,
                                    payload: pizza,
                                })
                            }
                            size="small"
                        >
                            Order now
                        </GradientButton>
                    </Link>
                </CardActions>
            </Card>
        </Fragment>
    );
};
PizzaCard.propTypes = {
    pizza: PropTypes.shape({
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        email: PropTypes.string,
    }).isRequired,
};

PizzaCard.defaultProps = {
    pizza: {},
};
export default PizzaCard;
