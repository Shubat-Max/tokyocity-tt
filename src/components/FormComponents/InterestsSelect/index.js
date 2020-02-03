import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Control, Placeholder } from "../UserForm.sc";
import { changeInputValue } from "../../../actions/userInfoForm";
import { Select, SelectInput, Options, Option } from "./InterestsSelect.sc";

const InterestsSelect = ({ tag }) => {
  const dispatch = useDispatch();
  const interests = useSelector(state => state.interestsModule.interests);
  const inputConfig = useSelector(state => state.formModule.form[tag]);

  const [value, setValue] = React.useState(
    inputConfig ? inputConfig.value || "" : ""
  );
  const [placeholderVisible, setPlaceholderVisibility] = React.useState(
    inputConfig ? !inputConfig.value || false : true
  );
  const [isFocused, setFocused] = React.useState(false);

  return (
    <Select>
      <Control>
        <Placeholder visible={placeholderVisible}>Interests</Placeholder>
        <SelectInput
          onFocus={() => {
            setFocused(true);
            setPlaceholderVisibility(false);
          }}
          onBlur={() => {
            value === "" && setPlaceholderVisibility(true);
            setFocused(false);
          }}
          onChange={e => {
            setValue(e.target.value);
            dispatch(changeInputValue(tag, e.target.value));
          }}
          value={value}
        />
      </Control>

      {isFocused && value && (
        <Options isFocused={isFocused} value={value}>
          {interests
            .filter(
              option =>
                option.toLowerCase().substring(0, value.length) ===
                value.toLowerCase()
            )
            .map((option, i) => (
              <Option key={i} onClick={() => setValue(option)}>
                {option}
              </Option>
            ))}
        </Options>
      )}
    </Select>
  );
};

export default InterestsSelect;
