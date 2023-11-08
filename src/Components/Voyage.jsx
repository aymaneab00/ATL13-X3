import React from "react";
import { Link } from "react-router-dom";

export default function Voyage({ articles }) {
  let articless = articles.filter((a) => a.categorie === "voyages");
  return (
    <div>
    {articless.map(article=>
     <div key={article.id}>
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p> categorie : {article.categorie}</p>
        </div>)}
      <Link to='/'>Retour sur les articles page home </Link>
    </div>
  );
}
