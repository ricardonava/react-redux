import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { doArchiveStory } from "./actions/archive";

import "./index.css";
import store from "./store";
import { getReadableStories } from "./selectors/story";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={(id) => store.dispatch(doArchiveStory(id))}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

store.subscribe(render);
render();
