import React from "react";
import {
  Grid,
  Container,
  Paper,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { useStyles } from "./contactsStyles";

interface IContacts {
  contacts: Contacts | undefined;
}

const Contacts: React.FC<IContacts> = props => {
  const { contacts } = props;
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Grid item lg={6} sm={12}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                primary={contacts?.email}
                secondary={
                  <Typography className={classes.secondaryText}>
                    E-mail
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={contacts?.phone}
                secondary={
                  <Typography className={classes.secondaryText}>
                    Phone
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
