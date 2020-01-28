import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { data } from "../../data/repositories";
import useStyles from "./projectsStyles";

const Projects = () => {
  const [repositories, setRepositories] = useState<Repositories[]>();
  const classes = useStyles();

  useEffect(() => {
    setRepositories(data);
  }, []);
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {repositories &&
            repositories.map(repo => {
              return (
                <Grid item lg={3} xs={6} alignContent="center">
                  <Paper className={classes.paper}>
                    <div className={classes.content}>
                      <img
                        src={repo.images[1]}
                        className={classes.image}
                        alt="screenshot"
                      />
                      {repo.name}
                      {repo.language}
                      {repo.code}
                    </div>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
