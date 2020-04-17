import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: "10px"
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0"
  },

  //MONITORS
  "@media (min-width:1275px)": {
    container: {
      marginTop: "100px",
      paddingTop: "150px",
      height: "100vh"
    },
    text: {
      marginTop: "5rem",
      fontWeight: "bold"
    }
  },

  //IPADPRO
  "@media (min-width:1020px)": {
    container: {
      marginTop: "0px"
    },
    text: {
      marginRight: "2rem",
      marginBottom: "2rem",
      fontWeight: "bold"
    }
  },
  button: {
    textAlign: "center",
    cursor: "pointer",
    display: "inline-block",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "100%",
    padding: "15px 30px",
    marginTop: "3rem",
    marginBottom: "2.5rem",
    fontSize: "25px",
    fontWeight: "600",
    alignItems: "center",
    "@media (min-width:1280px)": {
      padding: "20px 50px",
      width: 290
    }
  },
  imageContainer: {
    maxWidth: "100%",
    display: "block"
  },
  image: {
    width: "100%",
    height: "auto",
    transform: "scale(1.3)"
  },
  arrow: {
    cursor: "pointer",
    display: "none",
    textAlign: "center",
    bottom: 0,
    left: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "100%",
    height: "40px",
    fontSize: 40,
    animation: `$bounce 1s infinite`,
    "@media (min-width:1020px)": {
      display: "block"
    }
  },
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)"
    },
    "40%": {
      transform: "translateY(-25px)"
    },
    "60%": {
      transform: "translateY(-15px)"
    }
  }
});
