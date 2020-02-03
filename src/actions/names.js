import { LOAD_NAMES, START, SUCCESS } from "../config/actions";

export const loadNames = () => {
  return {
    type: LOAD_NAMES + START,
    payload: {
      loading: true,
      loaded: false
    }
  };
};

export const putNames = data => {
  return {
    type: LOAD_NAMES + SUCCESS,
    payload: {
      names: data,
      loading: false,
      loaded: true
    }
  };
};
