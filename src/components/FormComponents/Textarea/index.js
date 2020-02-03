import React from "react";
import { Wrapper, Control, Placeholder, Hint } from "../UserForm.sc";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../../actions/userInfoForm";
import { StyledTextarea } from "./Textarea.sc";

const Textarea = ({ tag, placeholder }) => {
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

  return (
    <Wrapper>
      <Control>
        <Placeholder visible={placeholderVisible}>{placeholder}</Placeholder>
        <StyledTextarea
          onFocus={() => {
            setFocus(true);
            setPlaceholderVisibility(false);
            setTouched(true);
          }}
          onBlur={e => {
            value === "" && setPlaceholderVisibility(true);
            setFocus(false);
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

export default Textarea;
