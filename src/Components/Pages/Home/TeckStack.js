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
  wrp4:{
    padding:"1rem 0 3rem",
      "& h3":{
        color: "#6640F4",
        fontSize:"2rem",
        fontWeight:"bold"
      },
      "& p":{
        color: "#666",
        fontSize:"0.8rem",
        margin:"1rem 0"
        // fontWeight:"bold"
      },
  },
  imgs:{
    display:"flex",
    width:"8%",
    gap:"2rem",
    [theme.breakpoints.down("sm")]:{
      flexWrap:"wrap",
      justifyContent:"center",
      width:"10%",
      margin:"0 auto"
    },
    "& img":{
      // width:"20%"
    }
  },
  img5:{
    display:"flex",
    width:"15%",
    // gap:"1rem",
    margin:"2rem 0",
    [theme.breakpoints.down("sm")]:{
      flexWrap:"wrap",
      justifyContent:"center",
      width:"10%",
      margin:"0 auto"
    },
    "& img":{
      // width:"20%"
    }
  },


  bag5: {
    display:"flex",
    alignItems:"center",
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
      fontSize: "40px",
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


const TeckStack = () => {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
    
      slidesToShow: 3,
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
  return (
    <>
      <Box className={classes.wrp4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6}> 
                <Box className={classes.bag5}>
                    {/* <Typography variant="h3" >Our Stack</Typography> */}
                    <Typography variant="h2">Tech we are </Typography>
                  {/* <Typography variant="h6">website</Typography> */}
                  <Typography variant="h6"><span><small>"masters in"</small></span></Typography>
                     
                </Box> 
                <p>Since we provide great Information & Technology Services, We prefer Updated Technologies to deliver Great Projects.</p>
                </Grid>
            <Grid item md={6} xs={12}> 
                {/* <Box className={classes.imgs}>
                    <img src="http://www.delphic.in/assets/img/Technologies/android.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/angular.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/aws.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/azure.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/flutter.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/nodejs.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/php.png" alt="" />
                    <img src="http://www.delphic.in/assets/img/Technologies/1280px-React-icon.svg.png" alt="" />
                   
                    
                </Box> 
                <Box className={classes.img5} >
                <img src="https://newrelic.com/sites/default/files/styles/800w/public/2022-04/kubernetes.png?itok=vqtkuBxI" alt="" />
                    <img src="https://orangematter.solarwinds.com/wp-content/uploads/2022/03/DevOps-lifecycle-capabilities-1024x621.png" alt="" />
                    <img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png" alt="" />
                    <img src="https://www.thomasmaurer.ch/wp-content/uploads/2015/05/Hyper-V-Windows-Containers.png" alt="" />
                </Box> */}

                
                <Slider {...settings}>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/android.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/angular.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/aws.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/azure.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/flutter.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/php.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "59%", margin: "0 auto"}}>
                  <img src="http://www.delphic.in/assets/img/Technologies/1280px-React-icon.svg.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "100%", margin: "0 auto"}}>
                  <img src="https://newrelic.com/sites/default/files/styles/800w/public/2022-04/kubernetes.png?itok=vqtkuBxI" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "100%", margin: "0 auto"}}>
                  <img src="https://orangematter.solarwinds.com/wp-content/uploads/2022/03/DevOps-lifecycle-capabilities-1024x621.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "100%", margin: "0 auto"}}>
                  <img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
          <Box className={classes.bag8}>
              <Box  className={classes.bag10}>
                  <Box  className={classes.bag9}>
                  <Box style={{textAlign: "center", width: "100%", margin: "0 auto"}}>
                  <img src="https://www.thomasmaurer.ch/wp-content/uploads/2015/05/Hyper-V-Windows-Containers.png" alt="" />
                  </Box>
                  </Box>
              </Box>
          </Box>
         
        
      
        
         
        </Slider>



                {/* <Box>
                    <img src="http://www.delphic.in/assets/img/Technologies/angular.png" alt="" />
                </Box>  */}
                </Grid>
          </Grid>
        </Container>
      </Box>
      
    </>
  );
};

export default TeckStack;