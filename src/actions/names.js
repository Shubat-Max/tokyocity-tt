import {LOAD_5_ALIKE_NAMES, LOAD_NAMES, START, SUCCESS} from "../config/actions";

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

export const load5AlikeNames = (pattern) => {
  return {
    type: LOAD_5_ALIKE_NAMES + START,
    payload: {
      pattern,
      loading: true,
      loaded: false
    }
  };
};

export const put5AlikeNames = data => {
  return {
    type: LOAD_5_ALIKE_NAMES + SUCCESS,
    payload: {
      names: data ? data : [],
      loading: false,
      loaded: true
    }
  };
};


