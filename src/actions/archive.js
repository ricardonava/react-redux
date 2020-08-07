import { STORY_ARCHIVE, STORY_UNARCHIVE } from "../constants/actionTypes";

const doArchiveStory = (id) => ({
  type: STORY_ARCHIVE,
  id,
});

const doUnArchiveStory = (id) => ({
  type: STORY_UNARCHIVE,
  id,
});

export { doArchiveStory, doUnArchiveStory };
