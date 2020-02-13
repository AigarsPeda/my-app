import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Switch, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface INavBar {
  changeLanguage: () => void;
  language: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    minHeight: "64px",
    justifyContent: "flex-end",
    width: "100%"
  },
  label: {
    color: "#FF8E53"
  }
});

const NavBar: React.FC<INavBar> = props => {
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
