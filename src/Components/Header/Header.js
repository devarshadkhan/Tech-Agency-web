import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../Images/logo.png"
import useOnclick from "../useOnclick"
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const useStyle = makeStyles((theme) => ({
  wrp1: {
    padding: "10px 0",
  },
  bag1: {
  
    // "display": "flex !important",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 0 0 3rem",
   
    "& a": {
      fontFamily: "rubik,Sans-serif",
      fontSize: "15px",
      fontWeight: "bold",
      textTransform: "capitalize",
      color: "#010103",
      // "padding": "0 10px"
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    "& a:hover": {
      color: "#ff4c30",
    },
    "& ul": {},
    "& li": {
      padding: "0 1rem",
    },
  },
  bag2: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent:"end"
    },
    "& button": {
      margin: "0 2rem",
      fontFamily: "rubik,Sans-serif",
      fontSize: "15px",
      fontWeight: "500",
      textTransform: "capitalize",
      lineHeight: "20px",
      letterSpacing: "-.6px",
      color: "#fff",
      borderStyle: "none",
      borderRadius: "3px",
      padding: "1rem 3rem",
      boxShadow: "0 10px 15px 0 rgb(255 83 48 / 35%)",
      backgroundImage: "linear-gradient(to right,#ff4c30,#ff6830,#fff,#f3806f)",
      backgroundSize: "300% 100%",
      transition: "all .4s ease-in-out",
      WebkitTransition: "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
    },
    "& button:hover":{
      "backgroundImage": "linear-gradient(to right,#f0561d,#fff,#ff6830,#f0561d)",
      "backgroundPosition": "100% 0",
      "OTransition": "all .4s ease-in-out",
      "WebkitTransition": "all .4s ease-in-out",
      "transition": "all .4s ease-in-out"
    }
  },
  LogoImg:{
    width:"100%",height:"62px",
    [theme.breakpoints.down("sm")]:{
     width:"auto",height:"62px",
     }
   }
}));


const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        {" "}
      </Box>
      <Box sx={{ my: 2, textAlign: { xs: "center" } }}>
      {/* <img
                  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/logo_v4.png"
                  alt=""
                  width="140px"
                /> */}
                Arshad Khan
      </Box>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
<ListItem key={item} disablePadding>
<ListItemButton sx={{ textAlign: "center" }}>
<ListItemText primary={item} />
</ListItemButton>
</ListItem>
))} */}

        <List
          className="navbar-nav "
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center" },
          }}
        >
         <ListItem class="nav-item dropdown">
                <AnchorLink href='#price'>
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                  </AnchorLink>
                </ListItem>
        </List>
      </List>
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const classes = useStyle();
   const ref = useRef()
  useOnclick(ref, () => setMobileOpen(true));
  return (
    <>
       <motion.Navbar
      // className="navbar"
      initial={{
        opacity: 0,
        y: -70
      }}
      animate={{
        duration: 1,
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9]
      }}
    >
      <Box sx={{ display: "flex", bgcolor: "#fff" }} className={classes.wrp1} >
        {/* <Container maxWidth="xl"> */}
        <AppBar
          component="nav"
          sx={{ bgcolor: "#fff", boxShadow: "none", position: "static" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none", color: "#000" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ textAlign: { sx: "center", md: "left" } }}>
              <Link to="/">
                {" "}
                <img
            src={Logo}
            alt="logo"
            className={classes.LogoImg}
          />
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", lg: "flex" },
              }}
              className={classes.bag1}
            >
              {/* {navItems.map((item) => ( */}

              <List className="navbar-nav flex-row">
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem class="nav-item dropdown">
                <AnchorLink href='#price' ref={ref}>
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                  </AnchorLink>
                </ListItem>
                
           
             
                
              
              </List>
              <Box className={classes.bag2}>
                <Box class="">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sign in
                  </Link>
                </Box>
                <Box class="">
                  <button className="btn btn-primary">Register</button>
                </Box>
              </Box>
              {/* ))} */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* </Container> */}
      </Box>
      </motion.Navbar>
    </>
  );
};

export default Header;