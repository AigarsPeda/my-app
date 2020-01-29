import React, { useState, useEffect } from "react";

import { Grid, Container, Typography } from "@material-ui/core";
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
        spacing={10}
        className={classes.container}
      >
        {repositories &&
          repositories.map((repo, index) => {
            return (
              <Grid key={index} item lg={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.content}>
                    <img
                      src={repo.images[1]}
                      className={classes.image}
                      alt="screenshot"
                    />

                    <ListItem>
                      <ListItemText
                        primary={repo.language}
                        secondary={
                          <Typography className={classes.secondaryText}>
                            Language
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={repo.library.length ? repo.library : "None"}
                        secondary={
                          <Typography className={classes.secondaryText}>
                            Library
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <a
                        href={repo.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText
                          primary={repo.code}
                          secondary={
                            <Typography className={classes.secondaryText}>
                              Code
                            </Typography>
                          }
                        />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href={repo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText
                          primary={
                            repo.website.length ? repo.website : "Not deployed"
                          }
                          secondary={
                            <Typography className={classes.secondaryText}>
                              Website
                            </Typography>
                          }
                        />
                      </a>
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
