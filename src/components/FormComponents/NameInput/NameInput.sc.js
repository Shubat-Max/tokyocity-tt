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

// {/*{!namesModule.loading && namesModule.loaded && namesModule.names &&*/}
// {/*<Tooltip isFocused={isFocused} value={value}>*/}
// {/*  { namesModule.names*/}
// {/*    .map((item, index) => (*/}
// {/*      <Item*/}
// {/*        key={index}*/}
// {/*        onClick={() => {*/}
// {/*          setValue(item.value);*/}
// {/*          setFocus(false);*/}
// {/*          dispatch(changeInputValue(tag, item.value));*/}
// {/*        }}*/}
// {/*      >*/}
// {/*        {item.value}*/}
// {/*      </Item>*/}
// {/*    ))}*/}
// {/*</Tooltip>*/}
// {/*}*/}

export const Suggestions = styled.div`
  margin-top: 5px;
  position: relative;
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 120%;
  height: 15px;
`;

export const Option = styled.span`
  text-decoration: underline dashed;
  color: rgba(0, 54, 188, 0.8);
  cursor: pointer;
  height: 15px;

  & + & {
    margin: 0 0 0 10px;
  }

  &:hover {
    color: rgb(0, 188, 158);
  }
`;

export const SuggestionLoader = styled.img`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  height: 15px;
  width: 15px;
`;