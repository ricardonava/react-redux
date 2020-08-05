import React from "react";
import Stories from "./Stories";
import "./App.css";

export const App = ({ stories, onArchive }) => {
  return (
    <div className="app">
      <Stories />
    </div>
  );
};

export default App;
