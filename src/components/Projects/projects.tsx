import React, { useState, useEffect } from "react";

import { Grid, Container, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./projectsStyles";

interface IProject {
  refProp: React.MutableRefObject<HTMLDivElement | undefined>;
  repositories: Repositories[] | undefined;
  secondary: DataLanguage;
}

const Projects: React.FC<IProject> = props => {
  const { refProp, repositories, secondary } = props;
  const [isVisible, setVisible] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const node = refProp.current;

    if (node) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [refProp]);

  return (
    <Container
      ref={refProp}
      className={isVisible ? classes.isVisible : classes.fadeInSection}
    >
      <Grid container direction="row" spacing={10} className={classes.grid}>
        {repositories &&
          repositories.map((repo, index) => {
            return (
              <Grid key={index} item lg={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
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
