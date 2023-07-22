import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import { ArticlesProvider } from "./ArticlesContext";

function App() {
  return (
    <div>
      <ArticlesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </ArticlesProvider>
    </div>
  );
}

export default App;
