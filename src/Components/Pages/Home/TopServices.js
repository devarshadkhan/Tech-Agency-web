import React from "react";
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
import { Link } from "react-router-dom";
// import { ClassNames } from '@emotion/react';

const useStyle = makeStyles((theme) => ({
  wrp4: {
    padding: "4rem 0 2rem",
  },
  // bag5: {
  //   // "& h6": {
  //   //   backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
  //   //   width: "17%",
  //   //   top: "0%",
  //   //   left: "0%",
  //   //   // position:"absolute",
  //   //   backgroundRepeat: "no-repeat",
  //   //   backgroundSize: "contain",
  //   //   // backgroundPosition: "center",
  //   //   color: "#fff",
  //   //   fontSize: "2rem",
  //   //   fontWeight: "bold",
  //   //   textAlign: "center",
  //   // },

  //   "& h6": {
  //     // //   backgroundImage:
  //     // // "url()",
  //     // backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
  //     // width: "100%",
  //     // height: "100%",
  //     // top: "0%",
  //     // left: "0%",
  //     // // position:"absolute",
  //     // backgroundRepeat: "no-repeat",
  //     // backgroundSize: "contain",
  //     // backgroundPosition: "center",
  //     // color: "#fff",
  //     // fontSize: "5rem",
  //     // fontWeight: "bold",
  //     "& span":{ position:"relative", padding: "1rem", margin:"0 15px",   [theme.breakpoints.down("md")]:{
  //       padding: "12rem 0",
  //     }},
  //     "& span::before":{ 
  //       position: "absolute",
  //       content: '""',
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "contain",
  //       backgroundPosition: "left",
  //       backgroundImage:
  //         "url(https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png)",
  //       width: "100%",
  //       height: "100%",
  //       top: "0%",
  //       left: "0%",
  //       [theme.breakpoints.down("md")]:{
  //         // height: "164px",
  //       }
  //     },
  //     "& small":{
  //       position: "relative", fontSize: "45px", color: "#fff",fontWeight:"bold",
  //       [theme.breakpoints.down("sm")]:{
  //         fontSize: "30px",
  //       },
  //       [theme.breakpoints.up("sm")]:{
  //         fontSize: "40px",
  //       }
  //     },
     
  //   },


  //   "& h2": {
  //     color: "#000000",
  //     fontSize: "45px",
  //     fontWeight: 700,
  //     lineHeight: "1.4em",
  //   },
  //   "& p": {
  //     color: "#212529",
  //     textAlign: "center",
  //     margin: "2rem 0",
  //   },
  //   "& div:hover": {},
  //   [theme.breakpoints.down("sm")]:{
  //     "& h6": {
  //       // backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
  //       width: "60%",
  //       top: "0%",
  //       left: "0%",
  //       // position:"absolute",
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "contain",
  //       // backgroundPosition: "center",
  //       color: "#fff",
  //       fontSize: "2rem",
  //       fontWeight: "bold",
  //       textAlign: "center",
  //     },
  //     "& h2": {
  //       color: "#000000",
  //       fontSize: "28px",
  //       fontWeight: 700,
  //       lineHeight: "1.4em",
  //     },
  //   },
  //   [theme.breakpoints.down("up")]:{
  //     "& h6": {
  //       // backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
  //       width: "33%",
  //       top: "0%",
  //       left: "0%",
  //       // position:"absolute",
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "contain",
  //       // backgroundPosition: "center",
  //       color: "#fff",
  //       fontSize: "2rem",
  //       fontWeight: "bold",
  //       textAlign: "center",
  //     },
  //     "& h2": {
  //       color: "#000000",
  //       fontSize: "28px",
  //       fontWeight: 700,
  //       lineHeight: "1.4em",
  //     },
  //   },
  // },
  bag7: {
    // position: "relative",
    // zIndex: 1,
    padding: "30px",
    border: "1px solid rgba(153, 153, 153, 0.2)",
    borderRadius: "8px",
    display: "block",
    backgroundColor: "#fff",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    margin: "2rem 0",
    height:"500px",
    "& bag7:hover": {
      boxShadow: "0px 54px 115px 0px rgb(52 60 66 / 25%)",
    },

    "& h6": {
      color: "#000",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    "& h5": {
      color: "#0066FF",
      fontSize: "14px",
      display: "inline-block",
      // marginBottom:"2rem",
    },
    "& img": {
      width: "20%",
      objectFit: "cover",
      margin: "1rem 0 3rem",
    },
    "& p": {
      color: "#666",
      marginBottom: "15px",
      fontSize: "14px",
    },
    "& a": {
      fontSize: "12px",
      padding: "5px 10px",
      borderRadius: "4px",
      backgroundColor: "#eef4f8",
      color: "#666",
     
    },
    "&:hover": {
      boxShadow: "0px 54px 115px 0px rgb(52 60 66 / 25%)",
    },
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    },
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
      "& span":{ position:"relative", padding: "2.5rem",margin:"0 15px",   [theme.breakpoints.down("md")]:{
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
        position: "relative", fontSize: "30px", color: "#fff",fontWeight:"bold",
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

const Data = [
  {
    id: 1,
    headingName: "IT Consultation",
    indexNumber: "01",
    decsmain:
      "24/7 support.",
      decsmain1:true,
      decsmain2:true,
      decsmain3:true,
    subdecs:
      "We have a large team of experienced consultants and developers which we outsource as consultant for contract projects and work requirement.",
    button1: "Consultation",
    button2: "Management",
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/10/39.png",
    margin: "0  20px 0 0",
  },
  {
    id: 2,
    headingName: "Data Security ",
    indexNumber: "02",
    decsmain: "Protect your website from DDoS attacks ",
    subdecs: " With Cloudflare protected name servers.",
    subdecs1: "Secure your files with automatic backups",
    button1: "Consultation",
    button3: true,
    button2: "Security",
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/09/19.png",
    margin: "0  20px 0 0",
  },
  {
    id: 3,
    headingName: "Website Development",
    indexNumber: "03",
    decsmain: "Build fast-loading websites",
    subdecs: "custom design websites",
    subdecs2: "Corporate and e-commerce websites",
    subdecs3: "SEO compatible websites",
    subdecs4: "mobile responsive websites",
    subdecs5: "With unlimited revisions until you are satisfied",
    button1: "WordPress",
    button2: "Data",
    button4: true,
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/09/21.png",
    margin: "0  20px 0 0",
  },
  {
    id: 4,
    headingName: "App Development ",
    indexNumber: "04",
    decsmain:
      "IOS & Android App",
    subdecs:
      "Intuitive UX/UI Design",
    subdecs1:
      "Membership System",
    subdecs2:
      "QR/Barcode Scanning",
    button1: "Consultation",
    button2: "Management",
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/09/18.png",
    margin: "0  20px 0 0",
  },
  {
    id: 1,
    headingName: "Payment gateway integration",
    indexNumber: "05",
    decsmain:
      "Integrate Payments gateway solutions in web & app",
    subdecs:
      "Deploy functionality to your app using prepackaged solutions",
    subdecs1:
      "Provide a frictionless payment experience.",
    button1: "Consultation",
    button2: "Management",
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/10/money.png",
    margin: "0  20px 0 0",
  },
  {
    id: 6,
    headingName: "Cloud Services & Hosting ",
    indexNumber: "06",
    decsmain:
      "LiteSpeed Web Server technology.",
    subdecs:
      "Unlimited SSL security certificates .",
    subdecs1:
      "Ensure 99.9% uptime guarantee",
    button1: "Consultation",
    button2: "Management",
    img: "https://iteck.themescamp.com/cyber-security/wp-content/uploads/sites/20/2022/09/20.png",
    margin: "0  20px 0 0",
  },
];
const TopServices = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp4} id="services">
        <Container >
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box className={classes.bag5}>
                <Stack
                  justifyContent="center"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Typography variant="h2">Discover our top</Typography>
                  {/* <Typography variant="h6">services</Typography> */}
                  <Typography variant="h6"><span><small>services</small></span></Typography>
                </Stack>
                <p>
                  Our strategy includes consistently evolving, to ensure we’re
                  producing exceptional SEO for business.
                </p>
              </Box>
            </Grid>
</Grid>
            <Grid container spacing={2}>
            {Data.map((e) => {
              return (
                <>
                  <Grid item md={6} lg={4} xs={12}>
                    <Box className={classes.bag7}>
                      <Stack
                        justifyContent="space-between"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <h6>{e.headingName}</h6>
                        <h5>{e.indexNumber}</h5>
                      </Stack>
                      <img src={e.img} alt="" />
                      <p>{e.decsmain}</p>
                      {e.decsmain1 && <p>maintenance and update for your website</p>}
                      {e.decsmain2 && <p>mobile application</p>}
                      {e.decsmain3 && <p>and server</p>}
                      <p>{e.subdecs}</p>
                      <p>{e.subdecs1}</p>
                      <p>{e.subdecs2}</p>
                      <p>{e.subdecs3}</p>
                      <p>{e.subdecs4}</p>
                      <p>{e.subdecs5}</p>
                      <Link to="" style={{margin:e.margin}}>{e.button2}</Link>
                      {/* {e.button3 && <Link to="" style={{margin:"0 20px"}}>Backup</Link>}
                      {e.button4 && <Link to="" style={{margin:"0 20px"}}>Theme</Link>} */}
                      <Link to="" >{e.button1}</Link>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopServices;