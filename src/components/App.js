import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store";
import styled from "styled-components";
import UserInfoPage from "./UserInfoPage";

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <UserInfoPage />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
};

export const OuterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #e1e5ea;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  background: #fff;
  padding: 30px;
`;

export default App;
