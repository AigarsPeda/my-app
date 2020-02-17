import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 25,
      marginTop: "100px",
      padding: 10
    },
    popupClose: {
      color: "red",
      fontSize: 25,
      cursor: "pointer",
      fontWeight: "normal",
      float: "right",
      marginRight: "15px",
      zIndex: 60,
      "@media (min-width:1280px)": {
        position: "absolute",
        right: "50px",
        top: "25px",
        float: "none"
      }
    },
    arrow: {
      color: "red",
      zIndex: 30
    },
    image: {
      maxWidth: "49vh",
      maxHeight: "49vh",
      objectFit: "scale-down",
      margin: "auto",
      "@media (min-width:1280px)": {
        maxWidth: "95vh",
        maxHeight: "79vh"
      }
    },
    popup: {
      backgroundColor: "rgba(36, 53, 84, 0.800)",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 20,
      position: "fixed",
      className: "slides"
    }
  })
);
