import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Main.scss";
import app from "../../FireBase";
import LoadingIcon from "../../images/loadingicon.jpeg";
import { useArticlesContext } from "../../ArticlesContext";

export const useActiveCategory = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? "All" : category
    );
  };

  return { activeCategory, handleCategoryClick };
};

function Main() {
  const { activeCategory, handleCategoryClick } = useActiveCategory();
  const { articles } = useArticlesContext();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [firstEightArticles, setFirstEightArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data && Array.isArray(data)) {
          const filteredArticles =
            activeCategory === "All"
              ? data
              : data.filter((article) => article.type === activeCategory);

          const firstEight = filteredArticles.slice(0, 8);
          setFirstEightArticles(firstEight);
        }
      });
    };

    fetchData();
  }, [activeCategory]);

  const handleAllImagesLoaded = () => {
    setImagesLoaded(true);
  };

  const renderArticles = firstEightArticles.length ? (
    firstEightArticles.map((article) => (
      <div className="article" key={article.id}>
        {!imagesLoaded && (
          <img src={LoadingIcon} className="blog-item" alt="Loading Icon" />
        )}
        <img
          src={article.image}
          className={`blog-item ${imagesLoaded ? "loaded" : "hidden"}`}
          onLoad={handleAllImagesLoaded}
          alt={article.title}
        />
        <div className="blog-type">
          <p>{article.type}</p>
        </div>
        <span>{article.date}</span>
        <div>
          <p className="title">{article.title}</p>
          <span className="description">{article.description}</span>
        </div>
      </div>
    ))
  ) : (
    <div className="no-results">
      <p>No Results Found :(</p>
    </div>
  );

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
      <div className="articles-container">{renderArticles}</div>
    </>
  );
}

export default Main;
