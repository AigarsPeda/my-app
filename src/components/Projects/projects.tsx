import React, { useState, useEffect } from "react";

import { Grid, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { data } from "../../data/repositories";
import useStyles from "./projectsStyles";

const Projects = () => {
  const [repositories, setRepositories] = useState<Repositories[]>();
  const classes = useStyles();

  useEffect(() => {
    setRepositories(data);
  }, []);
  return (
    <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={4}
        alignContent="center"
      >
        {repositories &&
          repositories.map((repo, index) => {
            return (
              <Grid key={index} item lg={3} sm={6} xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.content}>
                    <img
                      src={repo.images[1]}
                      className={classes.image}
                      alt="screenshot"
                    />
                    <ListItem>
                      <ListItemText primary={repo.name} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={repo.language} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={repo.code} />
                    </ListItem>
                  </div>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Projects;
