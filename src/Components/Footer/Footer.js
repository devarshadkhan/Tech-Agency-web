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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FooterLogo from "../Images/FooterLogo.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HomeIcon from '@mui/icons-material/Home';
const useStyle = makeStyles((theme) => ({
  wrp12: {
    padding: "4rem 0 0rem",
  },
  bag15: {
    "& ul":{
        margin:"1rem 0 0"
    },
    "& ul li":{},
    "& ul li a":{
        color: "#5a2cff",
      fontSize:"1.4rem"
    },
    "& img":{
      width:"50%"
    },
    [theme.breakpoints.down("sm")]:{
      "& img":{
        width:"50%"
      },
      "& ul li a":{
      fontSize:"0.8rem"
    },
    }
  },
  bag16:{

    "& h6":{
        color: "#5a2cff",
        fontSize:"1.7rem"
    },
    "& p":{
        margin:"2rem 0 0"
    },
    [theme.breakpoints.down("sm")]:{
   
      "& h6":{
        fontSize:"1rem",
        marginTop:"1rem"
    },
    "& p":{
        margin:"0.5rem 0 0",
        fontSize:"0.7rem"
    },
    }
  },
  bag17:{
    margin:"1rem 0",
    textAlign:"center",
        "& p":{
            color:"#434549"
        },
        [theme.breakpoints.down("sm")]:{
        "& p":{
           fontSize:"0.8rem",
           margin:"0 0 5rem"
        },
        }
  },
  bag18:{
    position:"relative",
    backgroundColor: "#f7f7f7",
    border: "1px solid #fff", 
    // width: "50%", marginLeft: " auto",
    borderRadius:"20px",
    "& svg":{color:"#000"},
    // "& a":{
    //     borderRadius: "50px",
    //     height: "40px",
    //     whiteSpace: "nowrap",
    //     // padding: "12px 24px 37px",
    //     // backgroundColor: "#25d366",
    //     color:"#000",
    //     position: "fixed",
    //     right: "0",
    //     bottom: "0",
    //     // margin: "0 1rem 1rem",
    //     // display:"none"
    // }
  },
  icons:{
    margin: "3rem 1rem",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    background: "#f7f7f7",
    padding: "0rem",
    borderRadius: "20px", 
    display:"none",
    width:"100%",
    [theme.breakpoints.down("sm")]:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        margin: " 1rem 0 2.3rem",
      },
    "& a":{
      padding:"1rem "
    }
  } ,
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp12}>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Box className={classes.bag15}>
                {/* <img
                  src={FooterLogo}
                  alt=""
                /> */}
<h1>Arshad Khan</h1>
                {/* <ul>
                 <li>  
                  <AnchorLink href='#'>
                    <a href="">About Us</a>
                    </AnchorLink>
                  </li>
                  <li>
                  <AnchorLink href='#services'>
                    <a href="">Services</a>
                    </AnchorLink>
                  </li>
                  <li>
                  <AnchorLink href='#contact'>
                    <a href="">Contact Us</a>
                    </AnchorLink>
                  </li>
                </ul> */}
              </Box>
            </Grid>

            {/* <Grid item md={3}>
              <Box className={classes.bag16}>
                <Typography variant="h6">Support</Typography>
                <p>+6 0173285016</p>
                <p>hello@buildwebtoday.com</p>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className={classes.bag16}>
                <Typography variant="h6">Who We Are</Typography>
                <p>
                  D-1-11, Plaza Arkadia, Jalan Intisari, Desa Parkcity, 52200
                  Kuala Lumpur.
                </p>
              </Box>
            </Grid> */}
            <Grid item md={12}>
              <Box className={classes.bag17}>
                <p>
                © Copyright 2023 | MyTechEra
                </p>
              </Box>

             
            </Grid>

          </Grid>
        </Container>
      </Box>
       <Box className={classes.bag18}>
             <Box className={classes.icons}>
             <a href="/" ><HomeIcon/></a>
                <a href="https://api.whatsapp.com/send?phone=60173285016"  target="_blank"><WhatsAppIcon/></a>
                <a href="tel:+6 0173285016" ><AddIcCallIcon/></a>
             </Box>
     
              </Box>
    </>
  );
};

export default Footer;
