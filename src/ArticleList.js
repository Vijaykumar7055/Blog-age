import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

import './cute.css';
const ArticleList = ({ articles }) => (
  <div className="row app">
   
      <div className=''>
      <h2 className='text-uppercase my-4'>Our Blog Page </h2>
      </div>

    {articles.map((article, key) => (
      <div className="col-md-4 mb-3   d-flex   align-items-center">
        <Link className=" card b card-1 p-1" key={key} to={`/article/${article.name}`}>
          <img
            className="img-fluid my-div"
            alt="{article.title}"
            src={article.img}
          />
          <section className="card-content p-3">
            <h3>
              {article.title} <span className="cute">✏️</span>
            </h3>
            <p className="date">
              👧<a href={article.authorlink}>{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p>📝 {article.content[0].substring(0, 100)}...</p>
          </section>
        </Link>
      </div>
    ))}
  
  </div>
);

export default ArticleList;
