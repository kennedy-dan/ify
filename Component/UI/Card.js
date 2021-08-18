import {
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "auto",
    height: "40px",
    backgroundColor: "transparent",
    border: "1px solid #ced1df",
    borderRadius: "8px",
    fontSize: "15px",
    textTransform: "uppercase",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    margin: "7px",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      height: "28px",
    },
  },
  btn: {
    width: "auto",
    marginTop: "20px",
  },
}));

export const Cards = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const portfolio = [
    { title: "banach Algebra", id: "1" },
    { title: "functional Analysis", id: "12" },
    { title: "numerical analysis", id: "3" },
    { title: "group theory", id: "4" },
    { title: "abelien", id: "5" },
    { title: "loop", id: "6" },
    { title: "semi-group", id: "7" },
    { title: "homomorphism", id: "8" },
  ];

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction="column"
    >
      <Grid
        container
        direction="row"
        justifyContent={matchesXS ? "center" : "flex-start"}
      >
        {portfolio.map((name) => (
          <div key={name.id} className={classes.card}>
            <p
              style={{
                margin: "0 auto",
                textAlign: "center",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              {name.title}
            </p>
          </div>
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent={matchesXS ? "center" : "flex-start"}
      >
        <Button color="secondary" variant="contained" className={classes.btn}>
          Download CV
        </Button>
      </Grid>
    </Grid>
  );
};
