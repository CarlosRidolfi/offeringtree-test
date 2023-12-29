import styled from "styled-components";

export const SubscriptionWrapper = styled.div`
  max-width: 1280px;
  min-width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  border: 3px solid #a79696;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1.8rem;
    max-width: 900px;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color: lightgrey;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 500;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  column-gap: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
`;

export const InputSelect = styled.div`
  display: flex;
  column-gap: 5px;
`;
