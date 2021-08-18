import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import {
  Tabs,
  Tab,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  grow: {
    ...theme.mixins.toolbar,
  },

  growDrawer: {
    // ...theme.mixins.toolbar,
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: theme.font.primary.main,
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginLeft: "5px",
    },

    color: theme.palette.secondary.main,
    marginLeft: "3em",
    marginTop: "8px",
    fontSize: "18px",
  },
  titleScroll: {
    marginTop: "8px",
    fontFamily: theme.font.primary.main,
    fontWeight: "bold",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "1px",
    },
    color: theme.palette.secondary.main,
    marginLeft: "1em",
    fontSize: "18px",
  },
  appBar: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    padding: "0 20px",
  },
  appBarScrolled: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  opa: {
    background: "transparent",
  },
  tab: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: "bolder",
    fontFamily: theme.font.primary.main,
    opacity: 1,
    fontSize: "1em",
  },
  tabScrolled: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    fontFamily: theme.font.primary.main,
    color: "black",
    fontSize: "1em",
  },
  btn: {
    fontSize: "12px",
    color: theme.palette.primary.main,
    boxShadow: "none",
    fontFamily: theme.font.primary.main,
    textTransform: "none",
    padding: "7px 20px ",
    borderRadius: "5px",

    "&:hover": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "&:active": {
      outline: "none",
    },
  },
  scrollBtn: {
    fontSize: "13px",
    color: "black",
    boxShadow: "none",
    borderRadius: 0,
    fontFamily: theme.font.primary.main,
    textTransform: "none",
  },
  btnCont: {
    marginTop: "6px",
    marginRight: "3em",
  },
  drawerIcon: {
    fontSize: "25px",
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
  },
  drawerList: {
    fontSize: "17px",
    fontWeight: "50px",
    color: theme.palette.primary.main,
    textAlign: "center",
    boxShadow: "none",
    borderRadius: "0px",
    "&:hover": {
      boxShadow: "0px",
    },
    "&:active": {
      outline: "none",
    },
  },
  mainListIttem: {
    marginTop: "2em",
  },
  drawerRegBtnItem: {
    color: theme.palette.primary.main,
    fontSize: "17px",
  },
  cancelIcon: {
    fontSize: "30px",
    marginRight: "31px",
    marginTop: "10px",
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpendrawer] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [value, setValue] = useState(0);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const tabs = (
    <React.Fragment>
      <Grid item>
        <Grid container direction="row" justifyContent="center">
          <Tabs centered className={classes.tabContainer} value={value}>
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Home"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Blog"
            />
          </Tabs>
        </Grid>
      </Grid>
      <Grid item className={classes.btnCont}>
        <Grid container direction="row">
          <Button
            to="/signin"
            className={classes.btn}
            variant="contained"
            color="secondary"
          >
            Log in
          </Button>
          {/* <Button className={classes.btn} variant="contained" color="secondary">
            Register
          </Button> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor={"top"}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpendrawer(false)}
        onOpen={() => setOpendrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.growDrawer} />
        <Grid container direction="column">
          <Grid container direction="row" justify="flex-end">
            <ClearIcon
              className={classes.cancelIcon}
              onClick={() => setOpendrawer(false)}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            align="center"
            style={{ marginTop: "80px" }}
          >
            <List disablePadding justify="center" alignItems="center">
              <ListItem
                button
                onClick={() => setOpendrawer(false)}
                className={classes.mainListIttem}
              >
                <ListItemText disableTypography className={classes.drawerList}>
                  Home
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Blog
                </ListItemText>
              </ListItem>

              <ListItem
                button
                onClick={() => setOpendrawer(false)}
                to="/signin"
                className={classes.drawerList}
                style={{}}
              >
                <ListItemText disableTypography className={classes.drawerList}>
                  Login
                </ListItemText>
              </ListItem>
              {/* <ListItem
                button
                onClick={() => setOpendrawer(false)}
                style={{ alignSelf: "center" }}
              >
                <ListItemText
                  disableTypography
                  className={classes.drawerRegBtnItem}
                >
                  Register
                </ListItemText>
              </ListItem> */}
            </List>
          </Grid>
        </Grid>
      </SwipeableDrawer>

      <IconButton onClick={() => setOpendrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={0}
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Toolbar disableGutters>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography
                className={`${classes.title} ${
                  trigger === false ? "" : classes.titleScroll
                }`}
                variant="h6"
                noWrap
              >
                IFY
              </Typography>
            </Grid>
            {matchesSM ? drawer : tabs}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
