import React from "react";
import { useActiveCategory } from "../main/Main";
import "../main/Main.scss";
import "./AllArticles.scss";
import { useArticlesContext } from "../../ArticlesContext";
import Footer from "../footer/Footer";

function AllArticles() {
  const { activeCategory, handleCategoryClick } = useActiveCategory();
  const { articles } = useArticlesContext();

  return (
    <>
      <h1 className="topics">Popular topics</h1>
      <ul className="categories">
        <li
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </li>
        <li
          className={activeCategory === "Adventure" ? "active" : ""}
          onClick={() => handleCategoryClick("Adventure")}
        >
          Adventure
        </li>
        <li
          className={activeCategory === "Travel" ? "active" : ""}
          onClick={() => handleCategoryClick("Travel")}
        >
          Travel
        </li>
        <li
          className={activeCategory === "Fashion" ? "active" : ""}
          onClick={() => handleCategoryClick("Fashion")}
        >
          Fashion
        </li>
        <li
          className={activeCategory === "Technology" ? "active" : ""}
          onClick={() => handleCategoryClick("Technology")}
        >
          Technology
        </li>
        <li
          className={activeCategory === "Branding" ? "active" : ""}
          onClick={() => handleCategoryClick("Branding")}
        >
          Branding
        </li>
      </ul>
      <p className="view-all">View All</p>
      <div className="whole-articles-container">
        {articles.map((article) => (
          <div className="every-article" key={article.id}>
            <img src={article.image} alt="rume" />
            <div className="blog-type">
              <p>{article.type}</p>
            </div>
            <span>{article.date}</span>
            <div>
              <p className="every-title">{article.title}</p>
              <span className="every-description">{article.description}</span>
            </div>
            <div className="profile-information-container">
              <img src={article.profile} />
              <div className="job-information">
                <p>{article.name}</p>
                <span>{article.job}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AllArticles;
