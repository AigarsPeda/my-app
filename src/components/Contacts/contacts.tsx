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
  label: Label;
}

const Contacts: React.FC<IContacts> = props => {
  const { contacts, label } = props;
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
          <Paper className={classes.paper} id="sectionContacts">
            <ListItem>
              <ListItemText
                primary={
                  <a href="mailto:aigarspeda@gmail.com.com">
                    {contacts?.email}
                  </a>
                }
                secondary={
                  <Typography className={classes.secondaryText}>
                    {label.email}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={contacts?.phone}
                secondary={
                  <Typography className={classes.secondaryText}>
                    {label.phone}
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
