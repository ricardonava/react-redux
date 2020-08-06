// const isNotArchived = (archivedIds) => (story) =>
//   archivedIds.indexOf(story) === -1;

// const getReadableArchived = ({ archiveState, storyState }) =>
//   storyState.filter(isNotArchived(archiveState));

const getReadableArchived = ({ archiveState }) => archiveState;

export { getReadableArchived };
