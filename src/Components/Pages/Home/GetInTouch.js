import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import Whatapp from "../../Images/what.png";
import { motion as m } from "framer-motion";
const useStyle = makeStyles((theme) => ({
  wrp11: {
    padding: "1rem 0 2rem",
  },
  bag13: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid #ccc",
    marginTop: "2rem",
    borderRadius: "71px",
    flexWrap: "wrap",
    width:"50%",
    margin:"2rem auto",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px",
      padding: "10px",
      gap: "2rem",
      justifyContent: "flex-start",
      width:"100%",
    },
    // [theme.breakpoints.down("sm")]:{
    //   justifyContent: "center",
    // },
  },
  bag14: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
    // [theme.breakpoints.down("md")]:{
    //   justifyContent: "center",
    // },
    // [theme.breakpoints.up("md")]:{
    //   justifyContent: "center",
    // },
    gap: "2rem",

    "& img": {
      filter: "drop-shadow(-10px 10px 20px #084CBA77)",
    },
  },
  bbg: {
    width: "9% !important",
        marginRight: "3em",
    [theme.breakpoints.down("sm")]: {
      width: "15% !important",
    },
  },
  bag15: {
    textAlign: "center",
    "& h4": {
      fontSize: "45px",
      fontWeight: 700,
      lineHeight: "1.4em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    "& span": {
      color: "#157EFB",
    },
    "& p": {
      color: "#000",
      fontSize: "16px",
      margin: "1rem 0",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
  },
  bag5: {
    padding: "3rem 0  1rem",
    // "& h6": {
    //   backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
    //   width: "17%",
    //   top: "0%",
    //   left: "0%",
    //   // position:"absolute",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    //   // backgroundPosition: "center",
    //   color: "#fff",
    //   fontSize: "2rem",
    //   fontWeight: "bold",
    //   // textAlign: "center",
    //   // margin:"0 1rem",
    //   padding:"0 1rem",
    //   [theme.breakpoints.down("sm")]:{

    //     width: "35%", margin: "0 3rem", fontSize: "1rem"

    //   },
    //   [theme.breakpoints.down("md")]:{
    //     width: "35%", margin: "0", fontSize: "1rem"
    //   }
    // },

    "& h6": {
      // //   backgroundImage:
      // // "url()",
      // backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
      // width: "100%",
      // height: "100%",
      // top: "0%",
      // left: "0%",
      // // position:"absolute",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "contain",
      // backgroundPosition: "center",
      // color: "#fff",
      // fontSize: "5rem",
      // fontWeight: "bold",
      "& span": {
        position: "relative",
        padding: "2rem",
        margin: "0 15px",
        [theme.breakpoints.down("md")]: {
          padding: "2rem",
        },
      },
      "& span::before": {
        position: "absolute",
        content: '""',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left",
        backgroundImage:
          "url(https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png)",
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        [theme.breakpoints.down("md")]: {
          // height: "164px",
        },
      },
      "& small": {
        position: "relative",
        fontSize: "42px",
        color: "#fff",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
      },
    },

    "& h2": {
      color: "#000000",
      fontSize: "45px",
      fontWeight: 700,
      lineHeight: "1.4em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "19px",
        textAlign: "center",
      },
      // [theme.breakpoints.up("sm")]:{
      //   fontSize: "25px",
      //   textAlign:"center"
      // }
    },
    "& p": {
      color: "#212529",
      textAlign: "center",
      margin: "2rem 0",
    },
  },
  flx: {
    display: "flex",
  },
  p:{
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-29px",
    }, 
  }
}));

const GetInTouch = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp11}>
        <Container>
          <Grid>
            <Grid item md={12}>
              {/* <Box className={classes.bag15} style={{padding:"3rem 0"}}>
                    <Typography variant="h4" >Our <span>Mission</span></Typography>
                    <p>Mytechera aims to help Malaysian businesses transform digitally for greater
success. Whether it’s a website or mobile application, we build it for free or at
the lowest cost for you. 
</p>
                </Box> */}
              <Box className={classes.bag5}>
                <Stack
                  justifyContent="center"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                  overflow="hidden"
                >
                  <m.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    // sx={{display:"flex"}}
                    className={classes.flx}
                    // exit={{opacity:1}}
                  >
                    <Typography variant="h2">Our</Typography>
                    {/* <Typography variant="h6">services</Typography> */}
                    <Typography variant="h6">
                      <span>
                        <small>Mission</small>
                      </span>
                    </Typography>
                  </m.div>
                </Stack>
                <p>
                  Mytechera aims to help Malaysian businesses transform
                  digitally for greater success. Whether it’s a website or
                  mobile application, we build it for free or at the lowest cost
                  for you.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.wrp11}>
        <Container>
          <Grid>
            <Grid item md={12}>
              {/* <Box className={classes.bag15}>
                    <Typography variant="h4" >Get In <span>Touch</span></Typography>
                    <p>We will contact you within 24 hours of receiving your request.
</p>
                </Box> */}

              <Box className={classes.bag5}>
                <Stack
                  justifyContent="center"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                  overflow="hidden"
                >
                  <m.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    // sx={{display:"flex"}}
                    className={classes.flx}
                    // exit={{opacity:1}}
                  >
                    <Typography variant="h2">Get In </Typography>
                    {/* <Typography variant="h6">services</Typography> */}
                    <Typography variant="h6">
                      <span>
                        <small>Touch</small>
                      </span>
                    </Typography>
                  </m.div>
                </Stack>

                <p>
                  We will contact you within 24 hours of receiving your request.
                </p>
              </Box>

              <Box className={classes.bag13}>
                <Box className={classes.bag14}>
                  <img
                    src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/mail3d.png"
                    alt=""
                  />
                  <p>contact@Iteck.com</p>
                </Box>
              </Box>
              <Box className={classes.bag13}>
                <Box className={classes.bag14}>
                  <img
                    // src={Whatapp}
                    src={Whatapp}
                    className={classes.bbg}
                      // src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/mail3d.png"
                    alt=""
                  />
                  <p className={classes.p}>+6 0173285016{""}</p>
                </Box>
               
              </Box>


              {/* <Box className={classes.bag13}>
                <Box className={classes.bag14}>
                  <img src={Whatapp} alt="" x className={classes.bbg} />
                  <p> +6 0173285016</p>
                </Box>
                <Divider orientation="vertical" flexItem />
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GetInTouch;
