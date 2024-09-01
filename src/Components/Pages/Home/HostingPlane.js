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
const useStyle = makeStyles((theme) => ({
  wrp12: {
    padding: "4rem 0 2rem",
    backgroundColor: "#F0EFF5"
  },
  wrp123: {
    padding: "1rem 0 2rem",
    backgroundColor: "#F0EFF5"
  },
  bag20:{
    // textAlign: "center",
    // border: "1px solid #5a2cff",
    padding: "1.4rem ",
    borderRadius: "10px",
    background:"#fff",
    [theme.breakpoints.down("sm")]:{
         textAlign: "center",
      },
    [theme.breakpoints.down("md")]:{
         textAlign: "center",
      },
         fontSize:"18px",
    "& li":{
       color: "#999999", fontSize: "14px",padding:"12px 0"
      
    },
  },
  bag17:{
    "& h6":{ color: "#1F227D", fontSize: "26px", fontWeight: 700,marginBottom:"1rem"},
    "& p":{ color: "#666666", fontSize:"15px",marginBottom:"13px"},
  },
  bag18:{
    "& h4":{
      color: "#1F227D",
      margin: "12px 0 5px",
      textAlign: "left",
      fontSize: "40px",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]:{
        textAlign: "center",
     },
   [theme.breakpoints.down("md")]:{
        textAlign: "center",
     },
    },
    "& p":{
      // color: "#999999", fontSize: "14px"
      color: "#6c41ff",
  padding: "5px 10px",
  textAlign: "center",
  backgroundColor: "#f1eeff",
  borderRadius: "6px",
  marginBottom: "20px",
  marginTop: "5px",
  display: "inline-block",
  fontSize: "12px"
    },
  },
  bag22:{
    "& h5":{
      color: "#1F227D",
      margin: "12px 0 5px",
      textAlign: "left",
      fontSize: "30px",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]:{
        textAlign: "center",
     },
   [theme.breakpoints.down("md")]:{
        textAlign: "center",
     },
     
    },
    "& span":{
      color: "#666666", fontSize:"16px", fontWeight:"lighter"
    },
    "& p":{
      // color: "#999999", fontSize: "14px"
      color: "#6c41ff",
  padding: "5px 10px",
  textAlign: "center",
  backgroundColor: "#f1eeff",
  borderRadius: "6px",
  marginBottom: "20px",
  marginTop: "5px",
  display: "inline-block",
  fontSize: "12px"
    },
  },
  bag21:{
    color: "#666666", fontSize:"12px", fontWeight:"lighter",
    textAlign:"center",
    "& h1":{fontSize:"2rem",}
  },
  bag24:{
    textAlign:"center",
    "& h5":{
        color: "#1F227D",
        fontSize: "40px",
        fontWeight: 700,
        // lineHeight: "1.4rem",
        margin:"1rem 0",
        [theme.breakpoints.down("sm")]:{
          fontSize: "20px",
          },
    },
    "& p":{
        fontSize:"18px",
        [theme.breakpoints.down("sm")]:{
          fontSize:"15px",
          },
    }
  },

  bag25:{
    textAlign:"center",
    "& button":{
       backgroundColor: "#fff",
       color:"#000",
  // borderStyle: "solid",
  color: "#1F227D", fontSize: "14px", fontWeight: 700,
  borderWidth: "2px 2px 2px 2px",
  border: "1px solid #1F227D",
  borderRadius: "6px 6px 6px 6px",
  padding: "12px 30px 12px 30px",
  margin:"1rem 0"
  // width: "100%"
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
      "& span":{ position:"relative", padding: "2rem", margin:"0 15px",   [theme.breakpoints.down("md")]:{
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
        position: "relative", fontSize: "42px", color: "#fff",fontWeight:"bold",
        [theme.breakpoints.down("md")]:{
          fontSize: "20px",
        }
      },
     
    },
    
    "& h2": {
      color: "#000000",
      fontSize: "42px",
      fontWeight: 700,
      lineHeight: "1.4em",
      [theme.breakpoints.down("sm")]:{
        fontSize: "19px",
        margin:"1rem 0",
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
        id:1,
        planeName:"Basic Plan",
        planeDecs:"Best for sales page",
        planePackage:"Free",
        decs1:"Web design Package includess",
        decs2:"We build for you knew website",
        decs3:"Or redesign your existing page",
        decs4:"Basic template design",
        decs5:"Hosting Package includes",
        decs6:"15GB SSD Storage",
        decs7:"Unlimited bandwidth",
        decs8:"Unlimited Data Transfer",
        decs9:"24/7/365 Support",
        decs10:"Free Weekly Backups",
        decs11:"Enterprise Virus scanner",
        decs12:"LiteSpeed Web Server technology",
        plus:"+",
        btn:"Purchase Plane",
        sprice:"Rm350",
        sl:"/year",
        decs13:"Up to 5 page or section",
        decs14:"Mobile Compatible",
        decs15:"5 Corporate Emails",
        decs16:"Search Engine Submission",
        decs17:"WhatsApp Integration",
        decs18:"Live Chat Integration ",
        decs19:"Contact Form",
        decs20:"Free SSL Certification",
        decs21:"Domain name included",
        decs22:"3 revision",
        decs23:"Ready in 7 Days",
        decs24:"Payment Gateway Integrations",
    },
    {
        id:1,
        planeName:"Standard Plan",
        planeDecs:"Best for company profile",
        planePackage:"Rm650",
        decs1:"Web design Package includess",
        decs2:"We build for you knew website",
        decs3:"Or redesign your existing page",
        decs4:"Premium template design",
        decs5:"Hosting Package includes",
        decs6:"30GB SSD Storage",
        decs7:"Unlimited bandwidth",
        decs8:"Unlimited Data Transfer",
        decs9:"24/7/365 Support",
        decs10:"Free Weekly Backups",
        decs11:"Enterprise Virus scanner",
        decs12:"LiteSpeed Web Server technology",
         plus:"+",
        btn:"Purchase Plane",
        sprice:"Rm350",
        sl:"/year",
        decs13:"Up to 15 page or section",
        decs14:"Mobile Compatible",
        decs15:"5 Corporate Emails",
        decs16:"Search Engine Submission",
        decs17:"WhatsApp Integration",
        decs18:"Live Chat Integration ",
        decs19:"Contact Form",
        decs20:"Free SSL Certification",
        decs21:"Domain name included",
        decs22:"3 revision",
        decs23:"Ready in 7 Days",
        decs24:"Payment Gateway Integrations",
    },
    {
        id:1,
        planeName:"E-Commerce",
        planeDecs:"Best for online business",
        planePackage:"Rm1550",
        decs1:"Web design Package includess",
        decs2:"We build for you knew website",
        decs3:"Or redesign your existing page",
        decs4:"Basic template design",
        decs5:"Hosting Package includes",
        decs6:"60GB SSD Storage",
        decs7:"Unlimited bandwidth",
        decs8:"Unlimited Data Transfer",
        decs9:"24/7/365 Support",
        decs10:"Free Weekly Backups",
        decs11:"Enterprise Virus scanner",
        decs12:"LiteSpeed Web Server technology",
        plus:"+",
        btn:"Purchase Plane",
        sprice:"Rm350",
        sl:"/year",
        decs13:"Up to 15 page or section",
        decs14:"Mobile Compatible",
        decs15:"5 Corporate Emails",
        decs16:"Search Engine Submission",
        decs17:"WhatsApp Integration",
        decs18:"Live Chat Integration ",
        decs19:"Contact Form",
        decs20:"Free SSL Certification",
        decs21:"Domain name included",
        decs22:"3 revision",
        decs23:"Ready in 7 Days",
        decs24:"Payment Gateway Integrations",
    },
   
]
const  Data1 = [
  {
    id:1,
    planeName:"Business solution",
    planeDecs:"For startups & companies",
    decs1:"Web & App Development",
    decs2:"Looking for customize website or Customize software services or mobile application development. We have a team of in-house developers. Contact us to discuss further.",
    btn:false,

}]
const HostingPlane = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp12} id="price">
        <Container>
          <Grid container spacing={2}>
          <Grid item md={12}>
            {/* <Box className={classes.bag24}>
                <Typography variant="h5" >Web Design with hosting Packages</Typography>
                <p>Free web design package is for customers who purchase Hosting service for 2
years</p>
            </Box> */}
            <Box className={classes.bag5}>
                <Stack
                  justifyContent="center"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Typography variant="h2">Web Design with hosting </Typography>
                  {/* <Typography variant="h6">services</Typography> */}
                  <Typography variant="h6"><span><small>Packages</small></span></Typography>
                </Stack>
                <p>
                Free web design package is for customers who purchase Hosting service for 2
years
                </p>
              </Box>
          </Grid>
           {/* {
            Data.map((e) => {
                return(
                    <>
                    <Grid item md={6} lg={4} sm={12}>
               <Box className={classes.bag20}>
               <Box className={classes.bag17}>
                    <Typography variant="h6" >{e.planeName}</Typography>
                    <p>{e.planeDecs}</p>
                </Box>
                <Box className={classes.bag18}>
                    <Typography variant="h4" >{e.planePackage}</Typography>
                    <p>{e.decs1}</p>
                </Box>
                <Box className={classes.bag19}>
                    <ul>
                        <li>{e.decs2}</li>
                        <li>{e.decs3}</li>
                        <li>{e.decs4}</li>
                    </ul>
                </Box> 
                <Box className={classes.bag21}>
                    <Typography variant="h1" >+</Typography>
                </Box> 

                <Box className={classes.bag22}>
                    <Typography variant="h5" >Rm350 <span>/Year</span></Typography>
                    <p>{e.decs5}</p>
                </Box>

                <Box className={classes.bag23}>
                    <ul>
                    <li>{e.decs6}</li>
                    <li>{e.decs7}</li>
                    <li>{e.decs8}</li>
                    <li>{e.decs9}</li>
                    <li>{e.decs10}</li>
                    <li>{e.decs11}</li>
                    <li>{e.decs12}</li>
                    </ul>
                </Box>
               </Box>
            </Grid>
                    </>
                )
            })
           } */}

          </Grid>
        </Container>
      </Box>
      <Box className={classes.wrp12}>
        <Container>
          <Grid container spacing={2} sx={{justifyContent:"center",}}>
          
           {
            Data.map((e) => {
                return(
                    <>
                    <Grid item  md={6} lg={4} xs={12} >
               <Box className={classes.bag20}>
               <Box className={classes.bag17}>
                    <Typography variant="h6" >{e.planeName}</Typography>
                    <p>{e.planeDecs}</p>
                </Box>
                <Box className={classes.bag18}>
                    <Typography variant="h4" >{e.planePackage}</Typography>
                    <p>{e.decs1}</p>
                </Box>
                <Box className={classes.bag19}>
                    <ul>
                        <li>{e.decs2}</li>
                        <li>{e.decs3}</li>
                        <li>{e.decs4}</li>
                        <li>{e.decs13}</li>
                        <li>{e.decs14}</li>
                        <li>{e.decs15}</li>
                        <li>{e.decs16}</li>
                        <li>{e.decs17}</li>
                        <li>{e.decs18}</li>
                        <li>{e.decs19}</li>
                        <li>{e.decs20}</li>
                        <li>{e.decs21}</li>
                        <li>{e.decs22}</li>
                        <li>{e.decs23}</li>
                        <li>{e.decs24}</li>
                    </ul>
                </Box> 
                <Box className={classes.bag21}>
                    <Typography variant="h1" >{e.plus}</Typography>
                </Box> 

                <Box className={classes.bag22}>
                    <Typography variant="h5" >{e.sprice} <span>{e.sl}</span></Typography>
                    <p>{e.decs5}</p>
                </Box>

                <Box className={classes.bag23}>
                    <ul>
                    <li>{e.decs6}</li>
                    <li>{e.decs7}</li>
                    <li>{e.decs8}</li>
                    <li>{e.decs9}</li>
                    <li>{e.decs10}</li>
                    <li>{e.decs11}</li>
                    <li>{e.decs12}</li>
                    </ul>
                </Box>

                <Box className={classes.bag25}>
                    <Button variant="contained">
                      {e.btn}
                    </Button>
                </Box>
               </Box>
            </Grid>
                    </>
                )
            })
           }

          </Grid>
        </Container>
      </Box>
      <Box className={classes.wrp123}>
        <Container>
          <Grid container spacing={2} sx={{justifyContent:"center",}}>
          
           {
            Data1.map((e) => {
                return(
                    <>
                    <Grid item  md={6} lg={4} xs={12} >
               <Box className={classes.bag20}>
               <Box className={classes.bag17}>
                    <Typography variant="h6" >{e.planeName}</Typography>
                    <p>{e.planeDecs}</p>
                </Box>
                <Box className={classes.bag18}>
                    <Typography variant="h4" >{e.planePackage}</Typography>
                    <p>{e.decs1}</p>
                </Box>
                <Box className={classes.bag19}>
                    <ul>
                        <li>{e.decs2}</li>
                       
                    </ul>
                </Box> 
                

                

                

               
               </Box>
            </Grid>
                    </>
                )
            })
           }

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HostingPlane;
