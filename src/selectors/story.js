const isNotArchived = (stories) => {
  const archivedIds = stories.map((story) => story.objectID);
  return (story) => archivedIds.indexOf(story.objectID) === -1;
};

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };
