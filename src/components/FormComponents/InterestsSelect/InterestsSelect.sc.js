import styled from "styled-components";

export const Select = styled.div`
  width: 100%;
  margin-top: 20px;
  position: relative;
`;

export const SelectInput = styled.input`
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  display: block;
  width: calc(100% - 20px);
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 150%;
  background: transparent;
  outline: 0;
  border: none;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 #e2e8e9 inset;
`;

export const Options = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  max-height: ${props => (props.isFocused ? "130px" : "0")};
  width: 100%;
  z-index: 110;
  background: #fff;
  transition: 0.5s ease-in-out;
  overflow: auto;
  box-shadow: 0 0 2px 0 #e2e8e9;
`;

export const Option = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  font-family: Inter, sans-serif;

  &:hover {
    background: lightgray;
  }
`;