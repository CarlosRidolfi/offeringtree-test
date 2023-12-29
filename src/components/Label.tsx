import React from "react";
import styled from "styled-components";

type LabelProps = React.ComponentProps<"label"> & {
  title: string;
  htmlFor?: string;
};

const StyledLabel = styled.label`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

function Label({ title, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{title}</StyledLabel>;
}

export default Label;
