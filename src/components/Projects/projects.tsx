import React, { useState } from "react";

import { Grid, Container, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./projectsStyles";

interface IProject {
  //refProp: React.MutableRefObject<HTMLDivElement | undefined>;
  repositories: Repositories[] | undefined;
  secondary: DataLanguage;
  setRepoImagesById: (id: number) => void;
}

const Projects: React.FC<IProject> = props => {
  const { repositories, secondary, setRepoImagesById } = props;
  const [isVisible, setVisible] = useState(true);
  const classes = useStyles();

  return (
    <Container
      //ref={refProp}
      className={isVisible ? classes.isVisible : classes.fadeInSection}
    >
      <Grid
        container
        direction="row"
        spacing={10}
        className={classes.grid}
        id="repositories"
      >
        {repositories &&
          repositories.map(repo => {
            return (
              <Grid key={repo.id} item lg={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
                  <img
                    src={repo.images[0]}
                    className={classes.image}
                    alt="screenshot"
                    onClick={() => setRepoImagesById(repo.id)}
                  />

                  <ListItem>
                    <ListItemText
                      primary={repo.language}
                      secondary={
                        <Typography className={classes.secondaryText}>
                          {secondary.language}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        repo.library.length ? (
                          repo.library
                        ) : (
                          <Typography className={classes.backupText}>
                            {secondary.none}
                          </Typography>
                        )
                      }
                      secondary={
                        <Typography className={classes.secondaryText}>
                          {secondary.library}
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
                            {secondary.code}
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
                          repo.website.length ? (
                            repo.website
                          ) : (
                            <Typography className={classes.backupText}>
                              {secondary.notDeployed}
                            </Typography>
                          )
                        }
                        secondary={
                          <Typography className={classes.secondaryText}>
                            {secondary.website}
                          </Typography>
                        }
                      />
                    </a>
                  </ListItem>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Projects;
