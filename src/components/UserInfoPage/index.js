import React from "react";
import CandidateForm from "./CandidateForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadInterests } from "../../actions/interests";
import { loadNames } from "../../actions/names";
import Loader from "../Loader";

const UserInfoPage = () => {
  const {
    loading: namesLoading,
    loaded: namesLoaded,
    names
  } = useSelector(state => state.namesModule);
  const {
    loading: interestsLoading,
    loaded: interestsLoaded,
    interests
  } = useSelector(state => state.interestsModule);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!names) dispatch(loadNames());
  }, [names, dispatch]);
  React.useEffect(() => {
    if (!interests) dispatch(loadInterests());
  }, [interests, dispatch]);

  return (
    <Page>
      {namesLoaded &&
      !namesLoading &&
      interestsLoaded &&
      !interestsLoading &&
      names &&
      interests ? (
        <CandidateForm />
      ) : (
        <Loader />
      )}
    </Page>
  );
};

export const Page = styled.div`
  width: 540px;
  background: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  border-radius: 8px;
`;

export default UserInfoPage;
