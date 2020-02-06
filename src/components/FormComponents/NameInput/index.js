import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Option,SuggestionLoader,Suggestions } from "./NameInput.sc";
import RollingLoader from "./Rolling-0.7s-200px1.svg";
import { Wrapper, Control, Placeholder, Input, Hint } from "../UserForm.sc";
import { changeInputValue } from "../../../actions/userInfoForm";
import { load5AlikeNames } from "../../../actions/names";

export const NameInput = ({ tag }) => {
  const dispatch = useDispatch();
  const namesModule = useSelector(state => state.namesModule);
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
  const [isSuggestionDisplayed, setSuggestionDisplay] = React.useState(false);

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
            setSuggestionDisplay(true);
            dispatch(changeInputValue(tag, e.target.value));
            dispatch(load5AlikeNames(e.target.value));
            setValid(!!e.target.value);
          }}
          value={value}
          valid={isValid}
          required={isRequired}
          focused={isFocused}
          touched={isTouched}
        />
      </Control>

      {(namesModule.loading ||
        (namesModule.names &&
          namesModule.names.length > 1 &&
          isSuggestionDisplayed)) && (
        <Suggestions>
          {namesModule.loading && (
            <SuggestionLoader src={RollingLoader} alt="Tooltip loader" />
          )}

          {namesModule.loaded &&
            namesModule.names.map((item, index) => (
              <Option
                key={index}
                onClick={() => {
                  setValue(item.value);
                  dispatch(changeInputValue(tag, item.value));
                  setSuggestionDisplay(false);
                }}
              >
                {item.value}
              </Option>
            ))}
        </Suggestions>
      )}

      {isTouched && !isFocused && !value && isRequired && (
        <Hint>* Required</Hint>
      )}
    </Wrapper>
  );
};



export default NameInput;
