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
  Select,
  FormControl,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { ClassNames } from '@emotion/react';
import { useFormik } from "formik";
import * as yup from "yup";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const useStyle = makeStyles((theme) => ({
  contact: {
    height: "226px",
    backgroundColor: "#5a2cff",
    // backgroundImage:
    //   "linear-gradient(180deg, rgba(255,255,255,0) 45%,#5a2cff 45%)",
    // backgroundPosition: "center center",
    // backgroundRepeat: "no-repeat",
    borderWidth: "0px",
    borderColor: "#f2f3f5",
    borderStyle: "solid",
    visibility: "visible",
    animationDuration: "1.5s",
    marginTop: "2rem",
    // borderRadius: "20px",
    [theme.breakpoints.down("sm")]:{
      height: "auto",
    },
    [theme.breakpoints.down("md")]:{
      height: "auto",
    }
  },
  bag10: {
    "& h3": {
      color: "#fff",
      width: "50%",
      margin: "0 auto",
      fontSize: "2rem",
      textTransform: "uppercase",
      textAlign: "center",
      marginTop: "8rem",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]:{
        width: "100%",
        marginTop: "1rem",
        fontSize:"1rem",
        textAlign:"center",
        display:"none"
      },
      [theme.breakpoints.down("md")]:{
        width: "100%",
        margin: "1rem 0",
        fontSize:"1rem",
        textAlign:"center",
        display:"block"
      },
      // [theme.breakpoints.up("md")]:{
      //   color: "#fff",
      //   width: "50%",
      //   margin: "0 auto",
      //   fontSize: "1.7rem",
      //   textTransform: "uppercase",
      //   textAlign: "center",
      //   marginTop: "4rem",
      //   fontWeight: "bold",
      // }
    },
  },
  bag11: {
    position: "relative",
  },
  bag12: {
    position: "relative",
    "& img": {
      width: "24%",
      margin: "0 auto",
      position: "absolute",
      top: "-11rem",
      left: "0",
      right: "0",
      [theme.breakpoints.down("sm")]:{
        display:"none"
      },
      [theme.breakpoints.down("md")]:{
        display:"none"
      }
    },

    display: "flex",
    justifyContent: "center",
  },

  contactForm: {
    padding: "2rem 0 3rem",
  },
  form: {
    "& p": {
      color: "#000",
      fontSize: "2rem",
      fontWeight: "lighter",
      [theme.breakpoints.down("sm")]:{
        fontSize: "1.2rem",
        textAlign:"center",
        },
      
    },
    "& h2": {
      color: "#5a2cff",
      fontSize: "3.5rem",
      fontWeight: "bolder",
      [theme.breakpoints.down("sm")]:{
        fontSize: "1.5rem",
        textAlign:"center",
        },
      
    },
  },

  [theme.breakpoints.down("sm")]:{
    gap:{
      gap: "0",
      flexWrap:"wrap"
    }
    },

  forminput: {
    margin: "1.5rem 0",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    borderRadius: "50px",
    backgroundColor: "#f0f0f0",
    padding: "50px 60px 50px 60px",
    [theme.breakpoints.down("sm")]:{
      margin: "1rem 0",
       padding: "40px 30px",
       borderRadius: "20px",
      },

    "& input": {
      width: "100%",
      //   margin:"1rem 0",
    },
    "& button":{  
    borderColor: "#5a2cff",
    borderWidth: "2px 2px 2px 2px",
    borderRadius: "0px 0px 0px 0px",
    fontSize: "14px",
    paddingTop: "16px",
    paddingRight: "40px",
    paddingBottom: "16px",
    paddingLeft: "40px",
    background:"transparent",
    color:"#5a2cff",
    border:"1px solid #5a2cff",
    margin:"2rem 0"
},
"& button:hover":{
    color:"#5a2cff",
    background:"transparent",
    boxShadow:"none"
}
  },
  bag15: {
    "& .MuiFormControlLabel-label": {
      fontSize: "12px",
      color: "#141617",
    },
    "& svg": {
      color: "#5a2cff",
    },
    "& h6": {
      color: "#141617",
      fontSize: "1rem",
      marginTop: "1rem",
    },
  },
  bag16: {
    "& h6": { color: "#141617", fontSize: "1rem", marginTop: "1rem" },
    "& textarea": {
      width: "100%",
      padding: "10px",
      background: "transparent",
      border: "2px solid #5a2cff",
      borderRadius: "4px",
    },
  },
}));
const CssTextField = withStyles((theme) => ({
  root: {
    "& .MuiButtonBase-root": { color: "#5a2cff" },
    "& .MuiCheckbox-root.Mui-checked": {},

    // "& .MuiFormControl":{
    //     width:"60% !important"
    // },
    // "& .MuiTextField":{
    //     width:"60% !important"
    // },
    
    width: "50%",
    [theme.breakpoints.down("sm")]:{
     
      width: "100%",
      },
    [theme.breakpoints.down("md")]:{
     
      width: "100%",
      },
    // "& .MuiInputBase-root":{borderColor: "#5a2cff",},
    "& .MuiOutlinedInput-root": {
      margin: "1.8rem 0",
      [theme.breakpoints.down("md")]:{
        margin: "0.8rem 0",
        },
      "& fieldset": {
        borderTopWidth: "2px",

        borderBottomWidth: "2px",
        borderRightWidth: "2px",
        borderLeftWidth: "2px",
        borderColor: "#5a2cff",
      },
      "&:hover fieldset": {
        borderColor: "#5a2cff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5a2cff",
      },
    },
  },
}))(TextField);

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const TeckStack = () => {
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box className={classes.contact} id="contact">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={12}>
              <Box className={classes.bag12}>
                <img
                  src="https://www.buildwebtoday.com/wp-content/uploads/2022/10/buildwebtoday-preview-13-400x400.png"
                  alt=""
                />
              </Box>
              {/* <Box className={classes.bag11}>
                
                </Box> */}
              <Box className={classes.bag10}>
                <Typography variant="h3">
                Select our services and take a break
We do everything for you
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.contactForm}>
        <Container>
          <Grid >
            <Grid item md={12}>
              {/* <Box className={classes.form}>
                <p>Talk with a digital expert</p>
                <Typography variant="h2">Contact Us</Typography>
              </Box> */}

              <Box className={classes.forminput}>
                <form onSubmit={formik.handleSubmit}>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-around"
                    gap="2rem"
                    // flexWrap="wrap"
                    className={classes.gap}
                  >
                    <CssTextField
                      id="email"
                      name="email"
                      placeholder="first name"
                      type="text"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.email && Boolean(formik.errors.email)
                      // }
                      // helperText={formik.touched.email && formik.errors.email}
                    />
                    <CssTextField
                      id="email"
                      name="email"
                      placeholder="last name"
                      type="text"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.email && Boolean(formik.errors.email)
                      // }
                      // helperText={formik.touched.email && formik.errors.email}
                    />
                  </Stack>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-around"
                    gap="2rem"
                    // flexWrap="wrap"
                    className={classes.gap}
                    
                  >
                    <CssTextField
                      id="email"
                      name="email"
                      placeholder="admin@yahoo.com"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.email && Boolean(formik.errors.email)
                      // }
                      // helperText={formik.touched.email && formik.errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CssTextField
                      id="email"
                      name="email"
                      placeholder="98918xxx"
                      type="number"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.email && Boolean(formik.errors.email)
                      // }
                      // helperText={formik.touched.email && formik.errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalPhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                  {/* <FormControl fullWidth> */}
                  <Select
                    value={age}
                    fullWidth
                    onChange={handleChange}
                    displayEmpty
                    //   placeholder="Budget"
                    // inputProps={{ "aria-label": "Without label" }}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalPhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                  >
                    <MenuItem value="" > Budget</MenuItem>
                    <MenuItem value={10}>RM3500 - RM5500</MenuItem>
                    <MenuItem value={10}>RM3500 - RM5500</MenuItem>
                    <MenuItem value={30}>RM7000 - RM10,000</MenuItem>
                    <MenuItem value={40}>RM10,000 - RM50,000</MenuItem>
                    <MenuItem value={50}>RM50,000 and above</MenuItem>
                  </Select>
                  {/* </FormControl> */}

                  <Box className={classes.bag15}>
                    <Typography variant="h6">Subject *</Typography>

                    <Stack flexDirection="column">
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Landing Page"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Template Website"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Corporate Website"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Customise Website"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="E-commerce Website"
                      />
                    </Stack>
                  </Box>

                  <Box className={classes.bag16}>
                    <Typography variant="h6">Current Website URL</Typography>

                    <CssTextField
                      id="email"
                      name="email"
                      fullWidth
                      placeholder="https://"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.email && Boolean(formik.errors.email)
                      // }
                      // helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>

                  <Box className={classes.bag16}>
                    <Typography variant="h6">Message</Typography>
                    <TextareaAutosize
                      fullWidth
                      aria-label="minimum height"
                      minRows={5}
                      //   placeholder="Minimum 3 rows"
                      style={{}}
                    />
                  </Box>

                  <Box className={classes.bag15}>
                    <Typography variant="h6">Subject *</Typography>

                    <FormControlLabel
                      control={<Checkbox />}
                      label=" agree to the Privacy and Data Use Policy"
                    />
                  </Box>

                  <Button
                    color="primary"
                    variant="contained"
                    // fullWidth
                    type="submit"
                  >
                    ok! get quote now
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TeckStack;
