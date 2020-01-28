import React, { useState, useEffect } from "react";
import { data } from "../../data/repositories";

const Projects = () => {
  const [repositories, setRepositories] = useState<Repositories[]>();

  useEffect(() => {
    setRepositories(data);
  }, []);
  return (
    <div>
      {repositories &&
        repositories.map(repo => {
          return <h3>{repo.name}</h3>;
        })}
    </div>
  );
};

export default Projects;
