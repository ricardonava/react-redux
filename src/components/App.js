import React from "react";
import Stories from "./Stories";
import "./App.css";

export const App = ({ stories }) => {
  return (
    <div className="app">
      <Stories stories={stories} />
    </div>
  );
};

export default App;
