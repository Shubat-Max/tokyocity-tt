import React from "react";
import styled from "styled-components";
import LoaderSVG from "./Ripple-1s-200px.svg";

const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={LoaderSVG} alt="Loader" height="50" width="50" />
    </LoaderWrapper>
  );
};

export const LoaderWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
