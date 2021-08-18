import React from "react";
import Image from "next/image";
import { Grid,  Typography, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import profilePicture from "../public/images/mom1.png";

const useStyles = makeStyles((theme) => ({
  HiThere: {
    fontSize: "80px",
    lineHeight: "90px",
    color: "#1a1c20",
    fontWeight: "bold",
    [theme.breakpoints.down('md')]:{
    fontSize: "73px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "68px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      textAlign:'center'
    },
  },
  detail: {
    fontSize: "25px",
    lineHeight: "39px",
    opacity:1,
    width:'100%',
    textDecoration:'none',
    [theme.breakpoints.down('md')]:{
      fontSize: "21px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
        textAlign:'center'
      },
  },
  detailGrid:{
    width: "50%"  ,
    [theme.breakpoints.down("xs")]: {
     width:'100%'
    },
  }
}));

export const HeroBlock = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction='row' justifyContent='space-evenly' alignItems='center' spacing={0}>
      <Grid item>
        <Image
          src={profilePicture}
          alt="mrs Daniel image"
          width={ matchesMD? 320 : matchesSM ? 220:  350}
          height={matchesMD? 410: matchesSM ? 310:  430}
        />
      </Grid>
      <Grid item  className={classes.detailGrid}>
        <Typography variant="h1" className={classes.HiThere}>
          Hi there!
        </Typography>
        <p className={classes.detail} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
          dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
          consectetur adipiscing elit, adipiscing elitLorem ipsum dolor sit amet,
          consectetur adipiscing elit,
        </p>
      </Grid>
    </Grid>
  );
};
