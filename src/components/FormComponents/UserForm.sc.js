import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 20px;
`;

export const Control = styled.div`
  background: #fff;
  width: inherit;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 3px;
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.visible ? "0" : "-100%")};
  z-index: 90;
  width: calc(100% - 20px);
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 150%;
  padding: 8px 10px;
  border-radius: 3px;
  color: #4e696f;
  background: #e8eeef;
  transition: 0.24s;
  height: calc(100% - 16px);
`;

export const Input = styled.input`
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
  //border: 1px solid transparent;
  transition: 0.1s;

  ${props => {
    const { required, focused, touched, value, valid } = props;
    return !focused && touched
      ? valid
        ? css`
            box-shadow: 0 0 0 1px limegreen inset;
          `
        : (required && !value) || !valid
        ? css`
            box-shadow: 0 0 0 1px red inset;
          `
        : null
      : null;
  }}
`;

export const Hint = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 5px;
  color: red;
  font-size: 12px;
  font-family: Inter, sans-serif;
`;
