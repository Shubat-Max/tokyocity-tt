import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-height: 50px;
  max-width: calc(100% - 20px);
  min-width: calc(100% - 20px);
  outline: 0;
  border-radius: 3px;
  padding: 10px 10px 0 10px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  background: transparent;
  border: none;
  box-shadow: 0 2px 1px 0 #e2e8e9 inset;
`;