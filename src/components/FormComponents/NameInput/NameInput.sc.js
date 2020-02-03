import styled from "styled-components";

export const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  max-height: ${props => props.isFocused && props.value ? '145px' : '0'};
  width: 100%;
  z-index: 110;
  background: #fff;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  box-shadow: 0 0 1px 0 #e2e8e9;
`;

export const Item = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  font-family: Inter, sans-serif;
  
  &:hover {
    background: lightgray;
  }
`;