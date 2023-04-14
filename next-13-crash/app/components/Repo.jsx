import React from "react";
async function getRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/amineChaker1/${name}`
  );
  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await getRepo(name);

  return <div>{repo.name}</div>;
};

export default Repo;
