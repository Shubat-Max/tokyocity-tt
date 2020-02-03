import { LOAD_INTERESTS, START, SUCCESS } from "../config/actions";

const defaultState = [];

// Read IndexedDB for already stored data

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_INTERESTS + START:
      return {
        ...state,
        ...payload
      };

    case LOAD_INTERESTS + SUCCESS:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
