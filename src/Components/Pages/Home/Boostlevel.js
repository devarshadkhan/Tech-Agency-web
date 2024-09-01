import React, { useState, useEffect } from "react";
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
const useStyle = makeStyles((theme) => ({
  wrp3: {
    backgroundColor: "#fff",
    padding: "6rem 0 3rem",

    "& h2": {
      color: "#000000",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: "1.3em",
      
    },
    "& h6": {
      //   backgroundImage:
      // "url()",
      backgroundImage: `url(${"https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/11/shap_style_6.png"})`,
      width: "100%",
      top: "0%",
      left: "0%",
      // position:"absolute",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      // backgroundPosition: "center",
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    "& p": {
      color: "#666666",
      fontSize: "12px",
      margin: "3rem 0",
    },
    "& button": {
      display: "inline-block",
      fontSize: "12px",
      fontWeight: 700,
      textTransform: "capitalize",
      lineHeight: "1.7em",
      color: "#FFFFFF",
      fill: "#FFFFFF",
      borderRadius: "50px 50px 50px 50px",
      padding: "10px 25px 10px 25px",
      background: "#6640F4",
      backgroundImage: "none",
    },
    [theme.breakpoints.down("sm")]:{
     
      "& h2": {
       display:"none",
      },
      "& h6": {
        width: "35%",
        margin:"0 auto",
        fontSize: "1rem",
      },
      "& p": {
        color: "#666666",
        fontSize: "10px",
        margin: "1rem 0",
      },
      },
  },
  bag22:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
     
      display:"block !important",
      fontSize:"1.4rem !important",
      textAlign:"center",
      },
  }
}));

const Boostlevel = () => {
  const classes = useStyle();

  // const [timer,setTimer] = useState(10);
  // console.log("timer",timer)

  //   useEffect(() => {
  //       let time = setInterval(() => {
  //           setTimer((timer) => {
  //               if(timer === 0){
  //                 clearInterval(time);
  //                   return 0;
  //               }
  //               else return timer - 1
  //           })
  //       },1000)
  //   }, [])

  // let i = 10;
  // for (let i = 1; i <= 10; i++) {

  //   console.log("drgf",i)

  // }

  function alertfunc() {
    alert("Hello Javascript");
    console.log("Hii Javascript");
  }

  return (
    <>
      <Box className={classes.wrp3} id="services">
        <Container>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Typography variant="h2">
                Boost your <br /> business up to
              </Typography>
              <Typography variant="h2" className={classes.bag22}>
                Boost your business up to
              </Typography>
              <Typography variant="h6">high level</Typography>
              <p>
                Like any great agency, we are only as good as the result we
                deliver of our recent work. Our developers are committed to
                maintaining the highest web standards so that your site will
                withstand the test of time.
              </p>
              <Button variant="contained">About us</Button>
            </Grid>
            <Grid item md={7}>
              <img
                src="https://iteck.themescamp.com/marketing/wp-content/uploads/sites/4/2022/05/superman_3d.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <iframe style={{"border":"1px solid rgba(0, 0, 0, 0.1)","width":"800px","height":"450px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fwfol1RUPoC03yf88S33jOU%2FAaoo-Chale-Admin-Dashboard%3Fnode-id%3D0%253A1%26t%3DaSGiq5duxfZ36XTm-1" allowfullscreen></iframe> */}

      {/* <p>
{`${Math.floor(timer/10)}`.padStart(1,0)}
    {`${timer%10}`.padStart(1,0)}
</p> */}

      {/* <button onClick={alertfunc}>Alert</button> */}
    </>
  );
};

export default Boostlevel;
