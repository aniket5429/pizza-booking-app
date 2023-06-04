import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Box, Typography } from "@mui/material";
import AppLayout from "../components/Layout";
import BannerImg from "../assets/PizzaBanner.png";
import CustomizePizza from "../components/CustomizePizza";
import Hero from "../components/shared/Hero";
import { BgDarkContainer, GradientButton } from "../styles/home";
import { generateUUID } from "../utils";

import { useMemo } from "react";
import CartOrderSection from "../components/CartOrderSection";
import actionTypes from "../actions/actionTypes";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartList = useSelector(state => state.cart.cartList);

    const totalPrice = useMemo(() => {
        let price = 0;
        cartList.forEach(item => {
            if (item.finalPrice) {
                price = price + item.finalPrice;
            }
        });
        price = Number(price);
        return price || 0;
    }, [cartList]);

    const renderCartItems = () => {
        return cartList.map((pizza, index) => {
            return (
                <Grid item sx={{ px: 1, py: 3 }} key={index}>
                    <CustomizePizza pizza={pizza} />
                </Grid>
            );
        });
    };

    const submitOrder = () => {
        const orderId = generateUUID();
        dispatch({
            type: actionTypes.SUBMIT_ORDER,
            orderId,
            payload: cartList,
        });
        navigate(`/orders?orderId=${orderId}`);
    };

    const renderEmptyCart = () => {
        return (
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                        <Box
                            sx={{ maxWidth: "100%", maxHeight: "12rem" }}
                            component={"img"}
                            src="https://res.cloudinary.com/dczzp2imu/image/upload/engage4more/404.png"
                        />
                        <Typography variant="h1" sx={{ color: "white.main" }}>
                            No Items found in the cart.
                        </Typography>
                        <GradientButton
                            sx={{ mt: 5, px: 10 }}
                            onClick={() => navigate("/pizza-list")}
                        >
                            Order Now
                        </GradientButton>
                    </Grid>
                </Grid>
            </Container>
        );
    };

    const renderCartContent = () => {
        return (
            <Container maxWidth="xl" sx={{ mt: 7 }}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={8}>
                        <Box>
                            <Grid container flexDirection={"column"}>
                                {renderCartItems()}
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid
                        xs={12}
                        item
                        lg={4}
                        sx={{
                            py: 3,
                            pl: 3,
                            "@media (max-width:600px)": {
                                pl: 0,
                            },
                        }}
                    >
                        <CartOrderSection
                            callback={submitOrder}
                            totalPrice={totalPrice}
                        />
                    </Grid>
                </Grid>
            </Container>
        );
    };

    return (
        <AppLayout>
            <BgDarkContainer
                id="homepageContainer"
                maxWidth="xl"
                sx={{ pb: 10 }}
                style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    minHeight: "80vh",
                }}
            >
                <Box sx={{ maxHeight: "40vh" }}>
                    <Hero title="Your CART" imageURL={BannerImg} />
                </Box>
                {cartList.length ? renderCartContent() : renderEmptyCart()}
            </BgDarkContainer>
        </AppLayout>
    );
};

export default CartPage;
