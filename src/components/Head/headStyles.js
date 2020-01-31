import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    height: "100vh",
    marginTop: "10px"
  },
  text: {
    fontSize: "20px",
    fontWeight: "900",
    margin: "0"
  },

  //MONITORS
  "@media (min-width:1275px)": {
    container: {
      marginTop: "100px",
      paddingTop: "150px"
    },
    text: {
      marginTop: "5rem"
    }
  },

  //IPADPRO
  "@media (min-width:1020px)": {
    container: {
      marginTop: "0px"
    },
    text: {
      marginTop: "5rem"
    },
    arrow: {
      marginBottom: "3rem"
    }
  },
  button: {
    cursor: "pointer",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 50px",
    marginTop: "3rem",
    marginBottom: "3rem",
    fontSize: "25px",
    fontWeight: "600",
    alignItems: "center",
    "@media (min-width:1280px)": {
      padding: "0 50px"
      //width: "100%"
    }
  },
  imageContainer: {
    maxWidth: "100%"
  },
  image: {
    maxWidth: "100%",
    height: "auto"
    //marginTop: "1.5rem"
  },
  arrow: {
    cursor: "pointer",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: "-20px",
    marginTop: "2rem",
    marginBottom: "0.5rem",
    width: "40px",
    height: "40px",
    fontSize: 40,
    animation: `$bounce 1s infinite`
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
