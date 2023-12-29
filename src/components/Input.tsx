import React from "react";
import styled from "styled-components";

type InputProps = React.ComponentProps<"input"> & {
  small?: boolean;
};

const StyledInput = styled.input<InputProps>`
  font-size: 18px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 8px;
  width: ${(props) => (props.small ? "75px" : "200px")};
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

function Input({ onChange, placeholder, value, type, small }: InputProps) {
  return (
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      small={small}
    />
  );
}

export default Input;
