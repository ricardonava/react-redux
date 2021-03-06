import React from "react";
import "./App.css";
import Archived from "./Archived";
import SearchStories from "./SearchStories";
import Stories from "./Stories";

export const App = () => {
  return (
    <div className="app">
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
      <Archived />
    </div>
  );
};

export default App;
