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
    secondaryText: {
      color: "#FF8E53",
      fontSize: "12px"
    }
  })
);

export default useStyles;
