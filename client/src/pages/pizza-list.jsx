import { Container, Grid, Box } from "@mui/material";
import AppLayout from "../components/Layout";
import BannerImg from "../assets/PizzaBanner.png";
import PizzaCard from "../components/PizzaCard";
import Hero from "../components/shared/Hero";
import { BgDarkContainer } from "../styles/home";

import { PIZZA_OPTIONS } from "../constants";

const PizzaList = () => {
    const renderPizzaCards = () => {
        return PIZZA_OPTIONS.map((pizza, index) => {
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
        <AppLayout>
            <Container
                id="homepageContainer"
                maxWidth="xl"
                style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    minHeight: "80vh",
                }}
            >
                <Box sx={{ maxHeight: "40vh" }}>
                    <Hero title="EXPLORE OUR MENUS" imageURL={BannerImg} />
                </Box>
                <BgDarkContainer maxWidth="xl" sx={{ py: 15 }}>
                    <Box>
                        <Grid container>{renderPizzaCards()}</Grid>
                    </Box>
                </BgDarkContainer>
            </Container>
        </AppLayout>
    );
};

export default PizzaList;
