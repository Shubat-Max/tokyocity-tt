import styled from "styled-components";

export const Form = styled.form`
  padding: 20px 30px;
  background: #f4f7f8;
  counter-reset: headings-counter;
  border-radius: 6px;
`;

export const Heading = styled.div`
  &:before {
    counter-increment: headings-counter;
    content: counter(headings-counter);
    display: inline-block;
    text-align: center;
    background: #00bc9e;
    color: #fff;
    height: 30px;
    line-height: 30px;
    width: 30px;
    margin-right: 20px;
    border-radius: 50% 50% 50% 0;
  }

  & ~ & {
    margin-top: 40px;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  width: 100%;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 15px;
`;
