import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      width: "100%",
      padding: "40px",
      backgroundColor: "red"
    },
    paper: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 1 auto",
      backgroundColor: "blue",
      textOverflow: "ellipsis",
      overflow: "hidden",
      wordWrap: "break-word"
    },
    image: {
      width: "100%",
      height: "auto"
    }
  })
);

export default useStyles;
