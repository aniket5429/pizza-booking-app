import { Box, Typography } from "@mui/material";
import PizzaOrders from "../PizzaOrders";

const OrderList = ({ order }) => {
    return (
        <Box
            key={order.orderId}
            sx={{
                mt: 3,
                borderRadius: 4,
                border: "1px #D5D9D9 solid",
            }}
        >
            <Box
                sx={{
                    p: 2,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    background: "#F0F2F2",
                }}
            >
                <Typography variant={"caption"}>
                    <b>Order:</b> {order?.orderId ?? order.id}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flex: 1, background: "white", px: 4 }}>
                    <PizzaOrders orderedItems={order.pizzas} />
                </Box>
            </Box>
        </Box>
    );
};

export default OrderList;
