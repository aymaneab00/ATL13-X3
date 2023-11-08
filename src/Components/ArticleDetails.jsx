import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ArticleDetails({articles}) {
const {id}= useParams();
const article=articles.find(a=>a.id==id)
  return (
    <div>
    {article ? <div className=''>
        <img src={article.image} alt="" />
        <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <h2>Stock : {article.stock}</h2>
            <p>Categorie : <Link to={`/categories/${article.categorie}`} >
            {article.categorie} 
            </Link> </p>
            <Link to={'/'}>Retour sur page d accuiel</Link>
        </div>
    </div> : 'Code article non valide'} </div> )}
