import { Grid, TextField, Button, makeStyles,useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  TextField3: {
    width: "454px",
    "& .MuiFilledInput-root": {
      background: "#e5e8f0",
    },
    [theme.breakpoints.down("md")]: {
      width: "354px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
   
    
  },
  contactMsgGrid:{
    width: "40%" ,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign:'center'
    },
  },
  contactMsg: {
    fontSize: "64px",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("sm")]: {
     fontSize:'50px'
    },
  },
  TextFieldContainer:{
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  TextField1: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "& .MuiFilledInput-root": {
      background: "#e5e8f0",
    },
    [theme.breakpoints.down("md")]: {
      width: "169px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  TextField2: {
    "& .MuiFilledInput-root": {
      background: "#e5e8f0",
    },
    [theme.breakpoints.down("md")]: {
      width: "169px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btn: {
    width: "80px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    marginTop: "10px",

    },
  },
  formControll:{
    [theme.breakpoints.down("sm")]: {
      margin: '0 auto',
      width:'100%'
    },
  }
}));

export const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction={matchesSM? "column":'row'}
      justifyContent="space-evenly"
      alignItems='center'
      style={{ marginTop: "180px" }}
    >
      <Grid item className={classes.contactMsgGrid}>
        <h3 className={classes.contactMsg}>Want to get in touch?</h3>
      </Grid>
      <Grid item style={{  }} className={classes.TextFieldContainer}>
        <Grid container direction="column" item>
          <Grid
            container
            direction={matchesSM? "column": "row"}
            spacing={2}
            style={{ marginBottom: "2px" }}
            justifyContent={matchesSM? 'center' : null}
          >
            <Grid item className={classes.formControl}>
              <TextField
                label="Name"
                className={classes.TextField1}
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item className={classes.formControl}>
              <TextField
                label="Email"
                className={classes.TextField2}
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.formControll}>
            <TextField
              multiline
              rows={10}
              className={classes.TextField3}
              variant="filled"
              label="message"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Button color="secondary" variant="contained" className={classes.btn}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
