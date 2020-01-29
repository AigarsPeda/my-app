import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      marginTop: "2rem"
    },
    paper: {
      borderRadius: "27px",
      background: "linear-gradient(145deg, #09062e, #070527)",
      boxShadow: "9px 9px 20px #030211,-9px -9px 20px #0d0a45"
    },
    content: {
      flex: "1 1 auto",
      wordWrap: "break-word"
    },
    image: {
      width: "100%",
      height: "auto"
    },
    backupText: {
      color: "#304269"
    },
    secondaryText: {
      color: "#FF8E53",
      fontSize: "12px"
    },
    fadeInSection: {
      opacity: 0,
      visibility: "hidden"
    },
    isVisible: {
      opacity: 1,
      transform: "none",
      visibility: "visible",
      animation: `$fadeInDown 1.2s `
    },
    "@keyframes fadeInDown": {
      "0%": {
        opacity: 0,
        transform: "translateY(15vh)"
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)"
      }
    }
  })
);

export default useStyles;
