import React from 'react'
import { Link } from 'react-router-dom';

export default function Technologie({articles}) {
  let articless = articles.filter((a) => a.categorie === "technologie");

  return (

      <div>
      {articless.map(article=>
       <div key={article.id}>
        <img src={article.image} alt={article.title} />
        <h3>{article.title}</h3>   <p>categorie: {article.categorie}</p>
        <Link to={'/'}>Retour a la page d accuiel</Link> </div>
        )
        }
      </div>
    );

}
