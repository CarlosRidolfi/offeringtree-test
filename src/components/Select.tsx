import React from "react";
import styled from "styled-components";

type SelectProps = React.ComponentProps<"select"> & {
  options?: string[];
};

const StyledSelect = styled.select`
  width: 100%;
  min-width: 200px;
  font-size: 18px;
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px;
`;

function Select({ options, onChange, name }: SelectProps) {
  return (
    <StyledSelect name={name} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
