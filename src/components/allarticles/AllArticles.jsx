import React, { useState } from "react";
import "../main/Main.scss";
import "./AllArticles.scss";
import { useArticlesContext } from "../../ArticlesContext";
import Footer from "../footer/Footer";

function AllArticles() {
  const { articles } = useArticlesContext();

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.type === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

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
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
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
                <img src={article.profile} alt={article.name} />
                <div className="job-information">
                  <p>{article.name}</p>
                  <span>{article.job}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="all-articles-no-results">
            <p>No Results Found :(</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AllArticles;
