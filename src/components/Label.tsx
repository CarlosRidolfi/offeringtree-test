import React from "react";
import styled from "styled-components";

type LabelProps = React.ComponentProps<"label"> & {
  title: string;
  htmlFor?: string;
};

const StyledLabel = styled.label`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  display: block;
`;

function Label({ title, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{title}</StyledLabel>;
}

export default Label;
