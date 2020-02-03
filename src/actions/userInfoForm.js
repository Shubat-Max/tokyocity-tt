import { INPUT_CHANGE_VALUE, INPUT_VALIDATE_VALUE } from "../config/actions";

export const changeInputValue = (tag, value) => ({
  type: INPUT_CHANGE_VALUE,
  payload: {
    tag,
    value
  }
});

export const validateInput = (tag, isValid) => {
  return {
    type: INPUT_VALIDATE_VALUE,
    payload: {
      tag,
      isValid
    }
  };
};
