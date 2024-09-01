import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
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
      wrp5:{padding:"1rem 0 4rem"},
      bag8:{
        filter: "drop-shadow(5px 50px 30px rgba(7, 57, 114, 0.0666666667))",
      },
      bag9:{
        textAlign: "center",
        padding: "20px 18px",
        backgroundColor: "#f1f2fa",
        borderRadius: "20px",
        overflow: "hidden",
        // margin: "20px 0",
        margin:"20px 1rem",
        display: "block",
        color: "#000",
        display: "flex", flexDirection: "column",
        // width: "46%", margin: "0 auto"

        "& img":{
          filter: "drop-shadow(5px 15px 20px rgba(7, 57, 114, 0.3333333333))",
          marginBottom: "25px",
          // maxHeight: "100px",
          maxWidth: "100px",
          objectFit: "contain"
        },
        "& h5":{
          fontSize: "15px",
          fontWeight: "bold",
          lineHeight: "1.4em",
          color: "#000000"
        },
        "& p":{
          fontSize: "13px", lineHeight: "2em", color: "#666666"
        },
        "& button":{
          display:"none"
        }
      },
      bag5: {
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
          "& span":{ position:"relative", padding: "2.5rem", margin:"0 15px",   [theme.breakpoints.down("md")]:{
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
            position: "relative", fontSize: "45px", color: "#fff",fontWeight:"bold",
            [theme.breakpoints.down("md")]:{
              fontSize: "20px",
            }
          },
         
        },
        
        "& h2": {
          color: "#000000",
          fontSize: "45px",
          fontWeight: 700,
          lineHeight: "1.4em",
          [theme.breakpoints.down("sm")]:{
            fontSize: "19px",
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


const SliderServices = () => {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
    
      slidesToShow: 4,
      speed: 500,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      button:false,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const classes = useStyle();
//   const arr = ["arsh","tech","pro","arshad"];
//   const find = arr.filter((e) => {
//     return e
//   })
//     console.log("edgaj",find)

// var input = "Arshad Khan";
// var output = input.split( " " ).map(  //split into words and iterate via map
//      s => s.split("").reverse().join( "" )  //split individual words into characters and then reverse the array of character and join it back
// ).join( " " ); //join the individual words
// console.log("tygh",output)

  return (
    <>
      <Box className={classes.wrp5}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
          <Grid item md={12}>
              <Box className={classes.bag5}>
                <Stack
                  justifyContent="center"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Typography variant="h2">Add-on services to enhance your</Typography>
                  {/* <Typography variant="h6">website</Typography> */}
                  <Typography variant="h6"><span><small>website</small></span></Typography>
                </Stack>
                <p>
                Our strategy is constantly evolving to ensure that we are producing incredible services for
businesses.
                </p>
              </Box>
            </Grid>
          </Grid>
          {/* <Slider {...settings}>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/15.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Google/FB Ads</Typography>
                  <p>Get more website traffic, more customers & more online visibility with powerful SEO services.</p>
                  </Box>
              </Box>
          </Box>
         
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/16.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Content Strategy</Typography>
                  <p>You can provide the answers that your potential customers are trying to find, so you can become the industry.</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/17.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Social Media</Typography>
                  <p>Get more website traffic, more customers for your social chanel</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/18.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Website Design and Development</Typography>
                  <p>Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/19.png" alt="" />
                  </Box>
                  <Typography variant="h5" >TVC/ Viral Clip</Typography>
                  <p>Optimized your website on google result with PPC Marketing</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/20.png" alt="" />
                  </Box>
                  <Typography variant="h5" >PPC Ads</Typography>
                  <p>Optimized your website on google result with PPC Marketing</p>
                  </Box>
              </Box>
          </Box>
      
        
         
        </Slider> */}
        </Container>
        <Slider {...settings}>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/15.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Google/FB Ads</Typography>
                  <p>Get more website traffic, more customers & more online visibility with powerful SEO services.</p>
                  </Box>
              </Box>
          </Box>
         
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/16.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Content Strategy</Typography>
                  <p>You can provide the answers that your potential customers are trying to find, so you can become the industry.</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/17.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Social Media</Typography>
                  <p>Get more website traffic, more customers for your social chanel</p>
                  </Box>
              </Box>
          </Box>
          {/* <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/18.png" alt="" />
                  </Box>
                  <Typography variant="h5" >Website Design and Development</Typography>
                  <p>Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated</p>
                  </Box>
              </Box>
          </Box> */}
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/19.png" alt="" />
                  </Box>
                  <Typography variant="h5" >TVC/ Viral Clip</Typography>
                  <p>Optimized your website on google result with PPC Marketing</p>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/20.png" alt="" />
                  </Box>
                  <Typography variant="h5" >PPC Ads</Typography>
                  <p>Optimized your website on google result with PPC Marketing</p>
                  </Box>
              </Box>
          </Box>
      
        
         
        </Slider>
      </Box>
    
    </>
  );
};

export default SliderServices;

// 9870553636
