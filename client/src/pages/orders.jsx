import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Grid, Box, Typography, Button } from "@mui/material";
import AppLayout from "../components/Layout";
import BannerImg from "../assets/PizzaBanner.png";
import Hero from "../components/shared/Hero";

import { BgDarkContainer } from "../styles/home";
import { generateUUID } from "../utils";

import { useMemo } from "react";
import isEqual from "lodash/isEqual";
import merge from "lodash/merge";
import actionTypes from "../actions/actionTypes";
import OrderList from "../components/OrderList/index";
import { getPayloadForOrder, getUpdatedOrderDetails } from "../utils";
import CardOrderSection from "../components/CartOrderSection";

const TrackOrder = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const orderId = new URLSearchParams(location.search).get("orderId");
    const [socket, setSocket] = useState(null);
    const currentOrder = useSelector(state => state.orders.orderList[orderId]);
    const [orderDetails, setOrderDetails] = useState({ ...currentOrder });
    console.log("orderDetails", orderDetails);

    const updateOrderDetails = event => {
        const response = JSON.parse(event.data);
        setOrderDetails(state => {
            console.log("state", state);
            const finalData = getUpdatedOrderDetails(state, response);
            console.log("finalData", finalData);
            return { ...finalData };
        });
    };

    useEffect(() => {
        // Create WebSocket connection
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);

        // Connection opened
        ws.addEventListener("open", () => {
            ws.send(JSON.stringify(getPayloadForOrder(currentOrder.pizzas)));
        });

        // Listen for messages
        ws.addEventListener("message", updateOrderDetails);

        // Connection closed
        ws.addEventListener("close", event => {
            console.log("WebSocket closed:", event);
        });

        // Cleanup
        return () => {
            ws.close();
        };
    }, []);

    const renderOrderDetails = () => {
        if (!currentOrder.orderId) {
            return null;
        }
        return (
            <Box sx={{ flex: 1 }}>
                <Box>
                    <OrderList order={orderDetails} />
                </Box>
            </Box>
        );
    };

    return (
        <AppLayout>
            <BgDarkContainer
                id="homepageContainer"
                maxWidth="xl"
                style={{
                    paddingBottom: "10rem",
                    paddingLeft: 0,
                    paddingRight: 0,
                    minHeight: "80vh",
                }}
            >
                <Box sx={{ maxHeight: "40vh" }}>
                    <Hero title="Your Order" imageURL={BannerImg} />
                </Box>
                <Container maxWidth="xl" sx={{ mt: 7 }}>
                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={12} lg={6}>
                            <Box>{renderOrderDetails()}</Box>
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
                            <CardOrderSection
                                feedbackSection
                                callback={val => {
                                    if (val && val.trim().length) {
                                        enqueueSnackbar(
                                            "Your feedback has been submitted."
                                        );
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </BgDarkContainer>
        </AppLayout>
    );
};

export default TrackOrder;
