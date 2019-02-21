import React from "react";
import styled from "styled-components";
import {themeGet} from "styled-system";

import View from "./View";
import Flex from "./Flex";

export const Input = styled(View)`
  outline: none;
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 20px 0;
  &:placeholder {
    color: ${themeGet("colors.grey.8")};
  }
`;
Input.defaultProps = {
  as: "input",
  width: "100%",
  fontSize: 3,
  color: "grey.10"
};

function TextInput({
  left,
  right,
  width = "100%",
  value,
  onChange,
  placeholder,
  ...rest
}) {
  return (
    <Flex
      width={width}
      bg="grey.0"
      border="none"
      borderRadius={1}
      pl={left ? "0px" : 5}
      pr={right ? "0px" : 5}
      {...rest}
    >
      {left ? left : null}
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        flex="1"
      />
      {right ? right : null}
    </Flex>
  );
}
export default TextInput;
