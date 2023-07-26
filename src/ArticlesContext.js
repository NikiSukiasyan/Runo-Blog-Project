// ArticlesContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "./FireBase";

const ArticlesContext = createContext();

export const useArticlesContext = () => useContext(ArticlesContext);

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const articlesArray = Object.values(data);
          setArticles(articlesArray);
        }
      });
    };

    fetchData();
  }, []);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  return (
    <ArticlesContext.Provider value={{ articles, updateArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}
