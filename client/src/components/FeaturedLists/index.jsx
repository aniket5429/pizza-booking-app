import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Grid, Box } from "@mui/material";

import { GradientButton } from "../../styles/home";
import PizzaCard from "../PizzaCard";

const FeaturedLists = () => {
    const { pizzaList } = useSelector(state => state.pizza);
    const renderPizzaCards = () => {
        return pizzaList.slice(0, 8).map((pizza, index) => {
            return (
                <Grid
                    sx={{ px: 1, py: 3 }}
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    key={index}
                >
                    <PizzaCard pizza={pizza} />
                </Grid>
            );
        });
    };
    return (
        <Box>
            <Grid container>{renderPizzaCards()}</Grid>
            <Grid container justifyContent={"center"} sx={{ mt: 8 }}>
                <Grid item xs={12} md={6} lg={3}>
                    <Link to="/pizza-list">
                        <GradientButton fullWidth variant="contained">
                            View Full Menu
                        </GradientButton>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturedLists;
