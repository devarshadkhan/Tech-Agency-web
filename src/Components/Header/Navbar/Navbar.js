import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import NavLinks from "./LinkNav";
import { makeStyles } from "@mui/styles";
import Logo from "../../Images/logo.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import useOnclick from "../../useOnclick"
const useStyle = makeStyles((theme) => ({
  wrp1:{
    backgroundColor: "#dee0f2", paddingTop: "0.7rem" ,
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    margin:"2rem 2rem 0",
    [theme.breakpoints.down("sm")]:{
      margin:"0",
    },
    [theme.breakpoints.down("md")]:{
      margin:"0",
    },
  },
  btn: {
    " & button": {
      display: "inline-block",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "1.7em",
      color: "#FFFFFF",
      fill: "#FFFFFF",
      borderRadius: "100px 100px 100px 100px",
      padding: "10px 25px 10px 25px",
      background: "#6640F4",
      backgroundImage: "none",
    },
    "& i":{
      marginRight: "0.5rem",
      fontSize: "1rem",
    }
  },
  LogoImg:{
   width:"100%",height:"62px",
   [theme.breakpoints.down("sm")]:{
    width:"auto",height:"62px",
    }
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const classes = useStyle();
  // const ref = useRef()
  // useOnclick(ref, () => setOpen(true));
  return (
    <nav className={classes.wrp1} >
      <Box className="flex items-center font-medium justify-around">
        <Box className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          {/* <img
            src={Logo}
            alt="logo"
            className={classes.LogoImg}
          /> */}
          <h1>Arshad Khan</h1>
          <Box className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </Box>
        </Box>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
          {/* <AnchorLink href='#'> */}
            <Link to="/" className="py-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
              Home
            </Link>
            {/* </AnchorLink> */}
          </li>
          <li>
          <AnchorLink href='#services'>
            <Link to="/" className="py-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Services
            </Link>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink href='#price'>
            <Link to="/" className="py-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Price
            </Link>
            </AnchorLink>
          </li>
          {/* <li>
          <AnchorLink href='#contact'>
            <Link to="/" className="py-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Contact Us
            </Link>
            </AnchorLink>
          </li> */}
          {/* <NavLinks /> */}
        </ul>

        <Box className="md:block hidden">
          <Box className={classes.btn}>
            <Button variant="contained" disableRipple>
              <i class="bi bi-chat-dots"></i>
              Let's Talk
            </Button>
          </Box>
        </Box>



        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white absolute w-full top-0 overflow-y-auto bottom-0 pt-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        // ref={ref}
        style={{
          // position: "fixed", 
        // height: "100vh !important",
         zIndex: 34
         }}
        >
          <li>
            <Link to="/" className="pt-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
          <AnchorLink href='#services' onClick={() => setOpen(!open)}>
            <Link to="/" className="pt-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Services
            </Link>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink href='#price' onClick={() => setOpen(!open)}>
            <Link to="/" className="pt-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Price
            </Link>
            </AnchorLink>
          </li>
          {/* <li>
          <AnchorLink href='#contact'>
            <Link to="/" className="pt-7 px-3 inline-block" style={{fontSize:"13px",fontWeight:"500",}}>
            Contact Us
            </Link>
            </AnchorLink>
          </li> */}

          {/* <NavLinks /> */}
          <Box className="md:block hidden">
            <Button variant="contained">
              <i class="bi bi-chat-dots"></i>
              Let's Talk
            </Button>
          </Box>
        </ul>
        
      </Box>
    </nav>
  );
};

export default Navbar;