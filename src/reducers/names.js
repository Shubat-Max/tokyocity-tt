import { LOAD_NAMES, LOAD_5_ALIKE_NAMES, START, SUCCESS } from "../config/actions";

const defaultState = [];

// Read IndexedDB for already stored data

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_NAMES + START:
      return {
        ...state,
        ...payload
      };

    case LOAD_NAMES + SUCCESS:
      return {
        ...state,
        ...payload
      };

    case LOAD_5_ALIKE_NAMES + START:
      return {
        ...state,
        ...payload
      };

    case LOAD_5_ALIKE_NAMES + SUCCESS:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
