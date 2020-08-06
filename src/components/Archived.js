import React from "react";
import { connect } from "react-redux";
import { getReadableArchived } from "../selectors/archived";
import "./Stories.css";
import Story from "./Story";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%",
  },
  author: {
    label: "Author",
    width: "30%",
  },
  comments: {
    label: "Comments",
    width: "10%",
  },
  points: {
    label: "Points",
    width: "10%",
  },
  archive: {
    width: "10%",
  },
};

const Stories = ({ stories }) => (
  <div className="stories">
    {stories.length > 0 ? <h3>Archived</h3> : null}
    {(stories || []).map((story) => (
      <Story key={story.objectID} story={story} columns={COLUMNS} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  stories: getReadableArchived(state),
});

export default connect(mapStateToProps)(Stories);
