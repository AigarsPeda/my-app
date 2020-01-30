import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: "100vh"
    },
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      padding: theme.spacing(2, 7),
      "@media (min-width:1280px)": {
        padding: theme.spacing(4, 18)
      },
      borderRadius: "27px",
      color: "#ffff",
      background: "linear-gradient(145deg, #09062e, #070527)",
      boxShadow: "9px 9px 20px #030211,-9px -9px 20px #0d0a45"
    },
    secondaryText: {
      color: "#FF8E53",
      fontSize: "12px"
    }
  })
);
