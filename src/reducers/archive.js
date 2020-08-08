import { STORY_ARCHIVE, STORY_UNARCHIVE } from "../constants/actionTypes";
import { loadState } from "./../helpers/localStorage";

const INITIAL_STATE = loadState();

const applyArchiveStory = (state, action) => [...state, action.id];
const applyUnArchiveStory = (state, action) =>
  [...state].filter((id) => id !== action.id);

function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory(state, action);
    }
    case STORY_UNARCHIVE: {
      return applyUnArchiveStory(state, action);
    }
    default:
      return state;
  }
}

export default archiveReducer;
