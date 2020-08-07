import React from "react";
import { connect } from "react-redux";
import { doArchiveStory, doUnArchiveStory } from "../actions/archive";
import { ButtonInline } from "./Button";
import "./Story.css";

const Story = ({ story, columns, onArchive, onUnArchive, typeText }) => {
  const { title, url, author, num_comments, points } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        {typeText === "Archive" ? (
          <ButtonInline onClick={() => onArchive(story)}>
            {typeText}
          </ButtonInline>
        ) : (
          <ButtonInline onClick={() => onUnArchive(story)}>
            {typeText}
          </ButtonInline>
        )}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onArchive: (story) => dispatch(doArchiveStory(story)),
  onUnArchive: (story) => dispatch(doUnArchiveStory(story)),
});

export default connect(null, mapDispatchToProps)(Story);
