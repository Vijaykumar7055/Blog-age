import React from 'react';
import { Link } from 'react-router-dom';
import './cute.css';

const ArticleList = ({ articles }) => (
  <div className="row app d-flex align-items-center justify-content-center ps-5">
    {articles.map((article, key) => (
      <div className="col-md-4 mb-3 mt-0 d-flex align-items-center" key={key}>
        <Link className="b card-1 mt-5" to={`/article/${article.name}`}>
          <img
            className="img-fluid img-size my-div"
            alt={article.title}
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
