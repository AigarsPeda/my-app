import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Switch, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface INavBar {
  changeLanguage: () => void;
  language: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      padding: "10px 0",
      justifyContent: "flex-end",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        padding: "7px 0 2px 0"
      }
    },
    label: {
      color: "#FF8E53",
      width: "75px"
    }
  })
);

const NavBar: React.FC<INavBar> = (props) => {
  const { changeLanguage, language } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.label}
        control={<Switch onChange={changeLanguage} color="primary" />}
        label={
          <Typography className={classes.label}>
            {language === "ENG" ? "LV" : "ENG"}
          </Typography>
        }
      />
    </div>
  );
};

export default NavBar;
