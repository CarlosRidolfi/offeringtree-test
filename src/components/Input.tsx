import React, { useState } from "react";
import styled from "styled-components";

type InputProps = React.ComponentProps<"input"> & {
  small?: boolean;
};

const StyledInput = styled.input`
  font-size: 18px;
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px;
`;

function Input({ onChange, placeholder, value, type, small }: InputProps) {
  return (
    <>
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        style={{ width: small ? "75px" : "100%" }}
      />
    </>
  );
}

export default Input;
