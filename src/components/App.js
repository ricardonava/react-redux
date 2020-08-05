import React from "react";
import Stories from "./Stories";
import SearchStories from "./SearchStories";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
    </div>
  );
};

export default App;
