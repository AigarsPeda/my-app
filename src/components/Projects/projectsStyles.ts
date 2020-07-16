import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      minHeight: "100vh",
      marginTop: "0.5rem",
    },
    paper: {
      textAlign: "center",
      paddingRight: "5px",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      padding: theme.spacing(1),
      borderRadius: "27px",
      color: "#ffff",
      background: "linear-gradient(145deg, #09062e, #070527)",
      boxShadow: "9px 9px 20px #030211,-9px -9px 20px #0d0a45",
    },
    image: {
      width: "100%",
      height: "auto",
      borderTopRightRadius: "18px",
      borderTopLeftRadius: "18px",
      cursor: "pointer",
    },
    backupText: {
      color: "#304269",
    },
    secondaryText: {
      color: "#FF8E53",
      fontSize: "12px",
    },
    fadeInSection: {
      opacity: 0,
      visibility: "hidden",
    },
    isVisible: {
      opacity: 1,

      transform: "none",
      visibility: "visible",
      animation: `$fadeInDown 1.2s `,
    },
    padding: {
      padding: "0",
    },
    "@keyframes fadeInDown": {
      "0%": {
        opacity: 0,
        transform: "translateY(15vh)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  })
);
