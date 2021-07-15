import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";
import { response } from "express";


//https://api.github.com/orgs/rocketseat/repos
const repository = {
  name:'unform',
  description:'Form in React',
  link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(
    () => {
      fetch('https://github.com/unform/unform')
      .then(response => response.json())
      .then(data => console.log(data))
    },[]);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository = {repository}/>
      </ul>
    </section>
  );
}