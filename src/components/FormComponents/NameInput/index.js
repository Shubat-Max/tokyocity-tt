import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, Item } from "./NameInput.sc";
import { Wrapper, Control, Placeholder, Input, Hint } from "../UserForm.sc";
import { changeInputValue } from "../../../actions/userInfoForm";

export const NameInput = ({ tag }) => {
  const dispatch = useDispatch();
  const names = useSelector(state => state.namesModule.names);
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
        <Placeholder visible={placeholderVisible}>Your Name *</Placeholder>
        <Input
          onFocus={() => {
            setFocus(true);
            setPlaceholderVisibility(false);
            setTouched(true);
          }}
          onBlur={() => {
            value === "" && setPlaceholderVisibility(true);
            setFocus(false);
          }}
          onChange={e => {
            setValue(e.target.value);
            dispatch(changeInputValue(tag, e.target.value));
            setValid(!!e.target.value);
          }}
          value={value}
          valid={isValid}
          required={isRequired}
          focused={isFocused}
          touched={isTouched}
        />
      </Control>

      <Tooltip isFocused={isFocused} value={value}>
        {names
          .filter(item => item.includes(value))
          .slice(0, 5)
          .map((item, index) => (
            <Item
              key={index}
              onClick={() => {
                setValue(item);
                setFocus(false);
                dispatch(changeInputValue(tag, item));
              }}
            >
              {item}
            </Item>
          ))}
      </Tooltip>

      {isTouched && !isFocused && !value && isRequired && (
        <Hint>* Required</Hint>
      )}
    </Wrapper>
  );
};

export default NameInput;
