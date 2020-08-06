import React from "react";
import { connect } from "react-redux";
import { getReadableArchived } from "../selectors/archived";
import "./Stories.css";

const Archived = ({ archived }) => (
  <h1>{JSON.stringify(archived)}</h1>
  //   <div className="stories">
  //     <StoriesHeader columns={COLUMNS} />
  //     {(stories || []).map((story) => (
  //       <Story key={story.objectID} story={story} columns={COLUMNS} />
  //     ))}
  //   </div>
);

const mapStateToProps = (state) => ({
  archived: getReadableArchived(state),
});

export default connect(mapStateToProps)(Archived);
