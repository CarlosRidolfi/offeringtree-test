import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SubscriptionWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

  max-width: 800px;
  min-width: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: 3px;
  animation: ${fadeIn} 0.5s ease-in-out;
  -webkit-box-shadow: 0px 3px 5px 4px rgba(148, 74, 148, 1);
  -moz-box-shadow: 0px 3px 5px 4px rgba(148, 74, 148, 1);
  box-shadow: 0px 3px 5px 4px rgba(148, 74, 148, 1);

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 1.6rem;
    max-width: 600px;
    text-align: center;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 10px;
    background-color: #f1f1f1;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
`;

export const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const InputSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

export const StyledLabel = styled.label`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
`;

export const StyledSelect = styled.select`
  width: 100%;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;
