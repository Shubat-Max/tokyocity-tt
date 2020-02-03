import { INPUT_CHANGE_VALUE, INPUT_VALIDATE_VALUE } from "../config/actions";

const defaultState = {
  form: {
    name: {
      required: true
    },
    email: {
      required: true,
      valid: false
    }
  }
};

// Read IndexedDB for already stored data

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_CHANGE_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.tag]: {
            ...state.form[payload.tag],
            value: payload.value
          }
        }
      };

    case INPUT_VALIDATE_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.tag]: {
            ...state.form[payload.tag],
            valid: payload.isValid
          }
        }
      };

    default:
      return state;
  }
};
