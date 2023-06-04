import { styled } from "@mui/system";
import { Box, Container, Button } from "@mui/material";

export const HomepageHeroBanner = styled("div")({
    position: "absolute",
    top: "50%",
    left: "5%",
    background: "white",
    minWidth: "30rem",
    // padding: "2%",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.15)",
    borderRadius: 10,
    height: "60%",
    transform: "translateY(-50%)",
    // width: "80%",
    // marginLeft: "auto",
    // marginRight: "auto",
    // transform: "translateX(50%)",
    // background: "linear-gradient(to right, #FF4B2B, #FF416C)",
    // borderRadius: "3rem",
    // position: "absolute",
    // top: "50%",
    // left: 0,
});

export const HomepageHeroMainTitle = styled("h2")({
    paddingLeft: "5%",
    margin: 0,
    letterSpacing: 0,
    fontSize: "2rem",
    color: "white",
});

export const HomepageHeroSecondaryTitle = styled(HomepageHeroMainTitle)({
    "-webkit-text-fill-color": "transparent",
    "-webkit-text-stroke-width": "3px",
    "-webkit-text-stroke-color": "white",
});

export const SubscriptionPanel = styled("div")({
    background: "url(https://www.ctcstars.com/img/bg/bg-blue.jpg)",
    width: "100%",
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "@media (max-width:600px)": {
        "& .MuiFormControl-root ": {
            minWidth: "80%",
        },
    },
});

export const BgDarkContainer = styled(Container)({
    background: "url(https://www.ctcstars.com/img/bg/bg-dark-black.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
});

export const GradientButton = styled(Button)({
    background: "linear-gradient(to right, #FF4B2B, #FF416C)",
    color: "white",
});

export const HomeCards = styled(Box)({
    background:
        "url('https://img.freepik.com/free-photo/white-textured-concrete_125540-1826.jpg?w=2000&t=st=1685548857~exp=1685549457~hmac=4da4480b7537cc99a451d4fc636be1bd62121f2161d73e453041d92375b25c62')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "13rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    cursor: "pointer",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s ease-out",

    "&: hover": {
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.4);",
    },
    "& h2": {
        fontSize: "2.5rem",
        fontWeight: 900,
        textAlign: "center",
        color: "#FF416C",
    },
    "@media (max-width:600px)": {
        minHeight: "6rem",
        "& h2": {
            fontSize: "1.4rem",
        },
    },
});

export const CartBox = styled(Box)({
    background: "url('https://www.ctcstars.com/img/bg/bg-blue.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
});

export const HomeInfoBox = styled(Box)({
    position: "absolute",
    left: "5%",
    top: "50%",
    width: "30rem",
    backgroundColor: "white",
    transform: "translateY(-50%)",
    borderRadius: 5,
    boxShadow: "0px 2px 3px rgba(0,0,0,0.2)",
    padding: "2%",
    "@media (max-width:600px)": {
        position: "relative",
        left: "0",
        top: "0",
        width: "100%",
        transform: "none",
        marginTop: "10%",
        padding: "5%",
    },
});

export const HomeDescriptionImage = styled(Box)({
    maxWidth: "100%",
    width: "80%",
    maxHeight: "35rem",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 5,
    margin: "auto",
    display: "block",
    "@media (max-width:600px)": {
        width: "100%",
    },
});
