import { useState } from "react";
import {
    Container,
    TextField,
    Grid,
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
} from "@mui/material";
import AppLayout from "../components/Layout";
import SectionTitles from "../components/shared/Titles";
import {
    HomeInfoBox,
    HomepageHeroBanner,
    HomeDescriptionImage,
    HomepageHeroMainTitle,
    HomepageHeroSecondaryTitle,
    SubscriptionPanel,
    BgDarkContainer,
    HomeCards,
} from "../styles/home";
import FeaturedLists from "../components/FeaturedLists";

const Homepage = () => {
    const [activeTab, setActiveTab] = useState("delivery");
    return (
        <AppLayout>
            <Container
                id="homepageContainer"
                maxWidth="xl"
                style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
                <Box aria-label="heroImage" sx={{ position: "relative" }}>
                    <img
                        src="https://bostonpizza.com/en/index/_jcr_content/root/container_73434033/container_1304024597/teaser_copy.coreimg.85.1300.png/1676481068128/tod-homepagebanner-1300x400.png"
                        alt="Pizza Hero Image"
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            minHeight: "20rem",
                        }}
                    />
                    <HomepageHeroBanner>
                        <Tabs
                            value={activeTab}
                            onChange={(event, val) => {
                                setActiveTab(val);
                            }}
                            centered
                        >
                            <Tab value="delivery" label="Delivery" />
                            <Tab value="pickUp" label="Pickup" />
                        </Tabs>
                        <Box sx={{ my: 3, px: 5 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "600",
                                    mb: 2,
                                }}
                            >
                                Where will you receive your pizza ?
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                            >
                                Track My Location
                            </Button>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "center",
                                mb: 3,
                            }}
                        >
                            Or Search By City and Area
                        </Typography>
                        <Box sx={{}}></Box>
                    </HomepageHeroBanner>
                </Box>

                <Container maxWidth="xl" sx={{ py: "3%" }}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Grid item sx={{ mt: 3 }} xs={12} md={4} lg={3.5}>
                            <HomeCards>
                                <Typography variant="h2">
                                    VIEW <br />
                                    ALL PROMOTIONS
                                </Typography>
                            </HomeCards>
                        </Grid>
                        <Grid item sx={{ mt: 3 }} xs={12} md={4} lg={3.5}>
                            <HomeCards>
                                <Typography variant="h2">
                                    BROWSE <br />
                                    MENUS
                                </Typography>
                            </HomeCards>
                        </Grid>
                        <Grid item sx={{ mt: 3 }} xs={12} md={4} lg={3.5}>
                            <HomeCards>
                                <Typography variant="h2">
                                    FIND <br />
                                    YOUR SLICE
                                </Typography>
                            </HomeCards>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="xl" sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            width: "100%",
                            borderRadius: 4,
                            display: "block",
                            "@media (max-width:600px)": {},
                        }}
                        component={"img"}
                        src="https://bostonpizza.com/en/index/_jcr_content/root/container_73434033/container_941863679__1073312882/container/teaser_957109054_cop.coreimg.85.1300.png/1684335253106/bp-gc-bphomepagetile-1300x400-en.png"
                    />
                    <HomeInfoBox>
                        <Typography
                            variant="h2"
                            sx={{ color: "text.main", mb: 5 }}
                        >
                            SLICELINE FREE GIFT CARDS
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{ color: "primary", mb: 5 }}
                        >
                            There's never a bad time to surprise someone you
                            care about with a Sliceline gift card. Get your
                            customizable physical or E-Gift card online today!
                        </Typography>
                        <Button
                            sx={{ display: "block", mt: 4 }}
                            variant="contained"
                            color="error"
                        >
                            FIND OUT MORE
                        </Button>
                    </HomeInfoBox>
                </Container>

                <Container maxWidth="xl" sx={{ py: 10 }}>
                    <Grid container direction="row-reverse">
                        <Grid item xs={12} md={6}>
                            <SectionTitles title={"VISIT SLICELINE"} />
                            <Box sx={{ pl: 4 }}>
                                <Typography sx={{ my: 4 }}>
                                    Delicious Pizza Crafted with Passion!
                                </Typography>
                                <Typography>
                                    At SliceLine Pizza, we are passionate about
                                    serving the tastiest, highest quality pizzas
                                    that will leave you craving for more. Our
                                    commitment to using fresh ingredients,
                                    handcrafted dough, and mouthwatering
                                    toppings sets us apart. Whether you're
                                    dining in, ordering for delivery, or picking
                                    up a quick bite, we guarantee an exceptional
                                    pizza experience.
                                </Typography>
                                <Typography sx={{ mt: 3 }}>
                                    Our Signature Pizzas: <br />
                                    <br /> <b>The Classic</b>: Our rendition of
                                    the timeless Margherita pizza, featuring a
                                    thin and crispy crust topped with tangy
                                    tomato sauce, fresh mozzarella cheese, and
                                    fragrant basil leaves. It's a crowd favorite
                                    for a reason!
                                    <br />
                                    <br />
                                    <b>The Meat Lover's Delight:</b> Calling all
                                    carnivores! This hearty pizza is loaded with
                                    a generous combination of savory meats,
                                    including pepperoni, sausage, bacon, and
                                    ham. Each bite is a flavor explosion that
                                    will leave you wanting more.
                                    <br />
                                    <br />
                                    <b>The Veggie Supreme:</b> For our
                                    vegetarian friends, we offer a garden-fresh
                                    delight. This pizza is piled high with an
                                    assortment of colorful vegetables, such as
                                    bell peppers, onions, mushrooms, olives, and
                                    fresh tomatoes. It's a burst of freshness in
                                    every bite.
                                </Typography>
                                <Button
                                    sx={{ my: 4 }}
                                    variant="contained"
                                    color="error"
                                >
                                    Order Now
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                            <HomeDescriptionImage
                                component="img"
                                src="https://image.lexica.art/full_jpg/fc235417-a248-4b78-86a2-e0bfc5b3fb85"
                            />
                        </Grid>
                    </Grid>
                </Container>

                <BgDarkContainer maxWidth="xl" sx={{ py: 15 }}>
                    <SectionTitles title={"OUR FEATURED PRODUCTS"} />
                    <Box sx={{ mt: 5 }}>
                        <FeaturedLists />
                    </Box>
                </BgDarkContainer>
                <Container maxWidth="xl" sx={{ mt: 15, py: 5 }}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <SectionTitles title={"JOIN THE PIZZA CLUB"} />
                            <Typography sx={{ my: 4 }}>
                                Are you a true pizza lover looking to satisfy
                                your cravings while saving big? Join our
                                exclusive FreshSlice Pizzeria Membership today
                                and unlock a world of amazing benefits, offers,
                                and discounts!
                            </Typography>
                            <Typography>
                                As a valued member, you will enjoy the following
                                perks:
                                <br />
                                <br />
                                <b>Special Offers:</b> Get access to exclusive
                                deals and discounts available only to our
                                members. From discounted pizza combos to free
                                add-ons, we have got you covered. <br />
                                <br />
                                <b>Birthday Treat:</b> Celebrate your special
                                day with a mouthwatering surprise! As a member,
                                you will receive a complimentary pizza or a
                                special treat on your birthday.
                                <br />
                                <br />
                                <b>Faster Service:</b> Skip the queues! Our
                                members receive priority service, ensuring you
                                get your piping hot pizza even faster.
                                <br />
                                <br />
                                <b>Insider News:</b> Be the first to know about
                                our latest menu additions, limited-time
                                promotions, and exciting events happening at
                                FreshSlice. Personalized Recommendations: Let us
                                spoil you with personalized pizza
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <HomeDescriptionImage
                                component="img"
                                src="https://image.lexica.art/full_jpg/07e97331-348b-4576-bb10-7b6a5e42fe41"
                            />
                        </Grid>
                    </Grid>
                </Container>
                <SubscriptionPanel>
                    <Typography variant="h2" style={{ color: "white" }}>
                        SUBSCRIBE TO US
                    </Typography>
                    <Grid container justifyContent={"center"}>
                        <Grid item xs={12} lg={4} sx={{ textAlign: "center" }}>
                            <TextField
                                sx={{
                                    background: "white",
                                    minWidth: "100%",
                                }}
                                id="outlined-basic"
                                label="Enter your email address"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </SubscriptionPanel>
            </Container>
        </AppLayout>
    );
};

export default Homepage;
