import React from "react";
import Stories from "./Stories";
import "./App.css";

export const App = ({ stories, onArchive }) => {
  return (
    <div className="app">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
};

export default App;
