import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 30px;
  outline: 0;
  border: none;
  line-height: 60px;
  background: lightgray;
  cursor: default;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 18px;
  transition: 0.24s;

  ${props =>
    !props.disabled &&
    css`
      background: #00bc9e;
      cursor: pointer;
      &:hover {
        background: #00cbad;
      }

      &:active {
        background: #00a789;
      }
    `}
`;
