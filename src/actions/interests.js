import { LOAD_INTERESTS, START, SUCCESS } from "../config/actions";

export const loadInterests = () => {
  return {
    type: LOAD_INTERESTS + START,
    payload: {
      loading: true,
      loaded: false
    }
  };
};

export const putInterests = data => {
  return {
    type: LOAD_INTERESTS + SUCCESS,
    payload: {
      interests: data,
      loading: false,
      loaded: true
    }
  };
};
