import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    marginTop: "10rem",
    padding: "40px"
  },
  text: {
    marginTop: "5rem",
    fontSize: "30px",
    fontWeight: "900",
    lineHeight: "75px",
    marginRight: "3rem"
  },
  heading: {},
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 50px",
    marginTop: "3rem",
    fontSize: "25px",
    fontWeight: "600"
  },
  imageContainer: {
    maxWidth: "100%"
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  arrow: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: "-20px",
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
      opacity: 1,
      transform: "translateY(-30px)"
    },
    "60%": {
      transform: "translateY(-15px)"
    }
  }
});
export default useStyles;
