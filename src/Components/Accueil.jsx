import React from "react";
import { Link } from "react-router-dom";

export default function Accueil({ articles }) {
  return (
    <div>
      <div>

      <Link to={"/categories/technologie"}> Les articles de categorie Technologie </Link>
      <Link to={"/categories/voyages"}>  Les articles de categorie Voyages</Link>
      <Link to={"/categories/cuisine"}>  Les articles de categorie Cuisine</Link>
      </div>
      <div>
        <h1>Liste Des articles</h1>
        {articles.map(article=>
           <div key={article.id}>
            <span> Clique sur l image pour voir tous les info d article</span>
          <Link to={`/articles/${article.id}`}> <img src={article.image} alt={article.title} /> </Link>
           <h3>{article.title}
           </h3> <p>Categorie: {article.categorie}</p>  </div>
          )}
      </div>
    </div>
  
  );
}
