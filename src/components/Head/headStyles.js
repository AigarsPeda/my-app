import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    // backgroundColor: "red",
    width: "100%",
    padding: "40px"
  },
  blue: {
    backgroundColor: "blue"
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
    maxWidth: "750px"
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  }
});

export default useStyles;
