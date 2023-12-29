import React from "react";
import styled from "styled-components";

type SelectProps = React.ComponentProps<"select"> & {
  options?: string[];
};

const StyledSelect = styled.select`
  width: 100%;
  min-width: 200px;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

function Select({ options, onChange, name }: SelectProps) {
  return (
    <StyledSelect name={name} onChange={onChange}>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
    </StyledSelect>
  );
}

export default Select;
