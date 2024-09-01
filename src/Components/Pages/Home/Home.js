import React, { useState } from "react";
import Navbar from "../../Header/Navbar/Navbar";

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
} from "@mui/material";
// import { ClassNames } from '@emotion/react';
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Boostlevel from "./Boostlevel";
import TopServices from "./TopServices";
import Slider from "./SliderServices";
import TeckStack from "./TeckStack";
import About from "../About/About";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import Footer from "../../Footer/Footer";
import HostingPlane from "./HostingPlane";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import Header from "../../Header/Header";
import { motion as m } from "framer-motion";
const useStyle = makeStyles((theme) => ({
  wrp2: {
    // overflow:"hidden",
    backgroundColor: "#dee0f2",
    padding: "6rem 0 3rem",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    margin: "0 2rem 2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      padding: "2rem 0 3rem",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
    // position: "relative",
    // zIndex: -1,
  },
  bag1: {
    textAlign: "center",
    "& h4": {
      position:"relative",
      color: "#666666",
      fontSize: "18px",
      // textTransform: "uppercase",
      letterSpacing: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    "& h1": {
      color: "#000",
      fontSize: "4rem",
      // textTransform: "uppelrcase",
      fontWeight: "bold",
      margin: "2rem 0 0",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },

    "& h2": {
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
        padding: "4rem",
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
          height: "164px",
        },
      },
      "& small": {
        position: "relative",
        fontSize: "5rem",
        color: "#fff",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
          fontSize: "2rem",
        },
      },
    },
    // "& h2": {
    //   //   backgroundImage:
    //   // "url()",
    //   backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
    //   width: "100%",
    //   height: "100%",
    //   top: "0%",
    //   left: "0%",
    //   // position:"absolute",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    //   backgroundPosition: "center",
    //   color: "#fff",
    //   fontSize: "5rem",
    //   fontWeight: "bold",
    //   [theme.breakpoints.down("sm")]:{
    //     fontSize: "1rem",
    //   },
    // [theme.breakpoints.down("md")]:{
    //   fontSize: "2rem",
    // }
    // },

    "& p": {
      color: "#666666",
      fontSize: "14px",
      marginTop: "3rem",
      textAlign: "center !important",
      display: "flex",
      justifyContent: "center",
      margin: "3rem auto",
      width: "55%",
      position:"relative",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        textAlign: "justify !important",
      },
    },
  },
  img1: {
    width: "18%",
    position: "absolute",
    left: "-64px",

    [theme.breakpoints.down("sm")]: {
      top: "0",
      left:"0",
      width: "32%",
      // position:"absolute",
      // zIndex:"-1"
    },
    // [theme.breakpoints.up("sm")]: {
    //   width: "15%",
    // },
  },
  img2: {
    width: "13%",
    position: "absolute",
    right: "130px",
    top: "5rem",
    [theme.breakpoints.down("sm")]: {
      right: "0",
      width: "47%",
      top: "6rem",
    },
  },
  img3: {
    top: "15rem",
    right: "0",
    width: "29%",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "14rem",
      width:"50%",
      // display:"none"
    },
  },
  bag6: {
    marginTop: "1.5rem",

    "& button": {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "1.5em",
      padding: "10px 25px 10px 25px",
      backgroundColor: "#6640F4",
      borderRadius: "100px 100px 100px 100px",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        margin: "1rem 0",
      },
      [theme.breakpoints.up("sm")]: {
        margin: "1rem 0",
      },
      "& svg": {
        margin: "0 10px",
      },
    },
  },
  bag7: {
    background: "#fff",
    padding: "1px 27px",
    display: "flex",
    alignItems: "center",
    borderRadius: "91px",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      borderRadius: "10px",
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      borderRadius: "10px",
    },
    "& input": {
      // fontSize:"13px"
      "& svg": { color: "#666" },
    },
    "& input::placeholder": {
      fontSize: "12px",
      // color:"red"
    },
  },
  img4: {
    display: "none",
    width: "16%",
    position: "absolute",
    textAlign: "left",
    left: "34rem",
    zIndex: 0,
    bottom: "-15rem",
    animation: "animName 10s linear infinite",
  },
  "@keyframes animName": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  bag5: {
    display:"flex",
    alignItems:"center",
    flexWrap:"wrap",
    justifyContent:"center",
    position:"relative",
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
      [theme.breakpoints.down("sm")]:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      },
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
      "& span":{ position:"relative", padding: "3.5rem",margin:"0 15px",   [theme.breakpoints.down("md")]:{
        padding: "2rem",
      }},
      "& span::before":{ 
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
        [theme.breakpoints.down("md")]:{
          // height: "164px",
        }
      },
      "& small":{
        position: "relative", fontSize: "38px", color: "#fff",fontWeight:"bold",
        [theme.breakpoints.down("md")]:{
          fontSize: "20px",
        }
      },
     
    },
    
    "& h2": {
      color: "#000000",
      fontSize: "58px",
      fontWeight: 700,
      lineHeight: "1.4em",
      [theme.breakpoints.down("sm")]:{
        fontSize: "25px",
        textAlign:"center"
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
}));

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
})(TextField);

const Home = () => {
  const classes = useStyle();
  const [message, setMessage] = useState("");
  return (
    <>
      <m.div
        // initial={{
        //   opacity: 1,
        //   y: -70,
        // }}
        // animate={{
        //   duration: 0,
        //   opacity: 1,
        //   y: 0,
        // }}
        // transition={{
        //   duration: 1,
        //   ease: [0.6, 0.05, -0.01, 0.9]
        // }}

        // transition={{ duration: 0.75, }}
        // initial={{y:"100%"}}
        // animate={{y:"0%"}}
        // transition={{duration:0.15, }}
        // exit={{opacity:1}}

        // initial={{x:"100%"}}
        // animate={{x:0}}
        // transition={{duration:0.2, delay:0.5,}}
      >
        <Navbar />
      </m.div>
      {/* <Header/> */}

      <m.div
        // initial={{ opacity: 0, x: -80 }}
        // animate={{ opacity: 1, duration: 1, x: 0 }}
        // transition={{ duration: 0.75, }}

        // initial={{x:"100%"}}
        // animate={{x:"0%"}}
        // transition={{duration:0.80, }}
        // exit={{opacity:1}}

        initial={{y:"100%"}}
        animate={{y:0}}
        transition={{duration:0.5, delay:0.5,}}
      >
        <Box className={classes.wrp2} id="home">
          <Container>
            <Grid>
              <Grid item md={12}>
                <Box className={classes.bag1}>
                  <Box
                    style={{
                      position:"relative",
                      WebkitAnimation:
                        "slide_up_down 2s ease-in-out infinite alternate both",
                      animation:
                        "slide_up_down 2s ease-in-out infinite alternate both",
                      animationDuration: "1.7s",
                      transition:
                        "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
                    }}
                  >
                    <img
                      src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/04/hand_megaphone.png"
                      alt=""
                      className={classes.img1}
                    />
                  </Box>
                  <img
                    src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/04/header5_linechart.png"
                    alt=""
                    className={classes.img2}
                  />
                  <img
                    src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/04/rocket.png"
                    alt=""
                    className={classes.img3}
                  />
                  <Typography variant="h4">
                    TOWARDS DIGITALIZATION OF MALAYSIAN BUSINESS
                  </Typography>
                  {/* <Typography variant="h1">
                    We Build websites and mobile apps for
                  </Typography>
                  <Typography variant="h2">
                    <span>
                      <small>Free</small>
                    </span>
                  </Typography> */}

                  <Box className={classes.bag5}>
                    {/* <Typography variant="h3" >Our Stack</Typography> */}
                    <Typography variant="h2">We Build websites and mobile apps for</Typography>
                  {/* <Typography variant="h6">website</Typography> */}
                  <Typography variant="h6"><span><small>Free</small></span></Typography>
                     
                </Box> 
                  <p>
                    We aims to help Malaysian businesses transform digitally for
                    greater success. Whether it’s a website or mobile
                    application, we build or redesign it for free or at the
                    lowest cost for you
                  </p>
                </Box>

                <Box className={classes.bag6}>
                  <Stack
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <Box className={classes.bag7}>
                      {/* <CssTextField
                      id="username"
                      variant="outlined"
                      placeholder="https://yoursite.com"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LanguageIcon />
                          </InputAdornment>
                        ),
                      }}
                    /> */}

                      <CssTextField
                        id="message"
                        variant="outlined"
                        placeholder="type your message"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // onChange={(e) => {e.target.value}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MessageIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Button variant="contained">
                        {" "}
                        <a
                          href={`https://api.whatsapp.com/send?phone=60173285016&text=${message}`}
                          target="_blank"
                          message={message}
                        >
                          <WhatsAppIcon />
                          Send Whatsapp
                        </a>
                      </Button>
                    </Box>
                  </Stack>
                  <img
                    src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/04/target_3d.png"
                    alt=""
                    className={classes.img4}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </m.div>

      {/* <Boostlevel/> */}
      <m.div
        // initial={{ opacity: 0, x: -80 }}
        // animate={{ opacity: 1, duration: 1, x: 0 }}
        // transition={{ duration: 0.75, }}

        // initial={{x:"100%"}}
        // animate={{x:"0%"}}
        // transition={{duration:4,}}
        // exit={{opacity:1}}

        
        // initial={{x:"100%"}}
        // animate={{x:0}}
        // transition={{duration:3, }}
      >
      <TopServices />
      <Slider /></m.div>

      {/* <Contact/> */}
      <TeckStack />
      <m.div
        // initial={{ opacity: 0, x: -80 }}
        // animate={{ opacity: 1, duration: 1, x: 0 }}
        // transition={{ duration: 0.75, }}

        // initial={{x:"-100%"}}
        // animate={{x:"-0%"}}
        // // transition={{duration:3, ease:"easeIn"}}
        // transition={{duration:7,}}
        // exit={{opacity:1}}


        // initial={{x:"100%"}}
        // animate={{x:0}}
        // transition={{duration:5, }}
      >
      <HostingPlane />
      </m.div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
