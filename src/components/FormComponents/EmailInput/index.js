import React from "react";
import { Wrapper, Control, Placeholder, Input, Hint } from "../UserForm.sc";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue, validateInput } from "../../../actions/userInfoForm";

export const EmailInput = ({ tag }) => {
  const dispatch = useDispatch();
  const inputConfig = useSelector(state => state.formModule.form[tag]);

  const [value, setValue] = React.useState(
    inputConfig ? inputConfig.value || "" : ""
  );
  const [placeholderVisible, setPlaceholderVisibility] = React.useState(
    inputConfig ? !inputConfig.value || false : true
  );
  const [isFocused, setFocus] = React.useState(false);
  const [isTouched, setTouched] = React.useState(false);
  const [isValid, setValid] = React.useState(false);
  const [isRequired] = React.useState(
    inputConfig ? (inputConfig.required ? inputConfig.required : false) : false
  );

  const validate = value => {
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    let isValid = validEmailRegex.test(value);
    setValid(isValid);
    dispatch(validateInput(tag, isValid));
  };

  return (
    <Wrapper>
      <Control>
        <Placeholder visible={placeholderVisible}>Your Email *</Placeholder>
        <Input
          onFocus={() => {
            setFocus(true);
            setPlaceholderVisibility(false);
            setTouched(true);
          }}
          onBlur={e => {
            value === "" && setPlaceholderVisibility(true);
            setFocus(false);
            validate(e.target.value);
          }}
          onChange={e => {
            setValue(e.target.value);
            dispatch(changeInputValue(tag, e.target.value));
            setValid(false);
          }}
          value={value}
          valid={isValid}
          required={isRequired}
          focused={isFocused}
          touched={isTouched}
        />
      </Control>
      {isTouched && !isFocused && !value && isRequired && (
        <Hint>* Required</Hint>
      )}
    </Wrapper>
  );
};

export default EmailInput;
