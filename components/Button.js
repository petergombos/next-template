import styled from "styled-components";
import {themeGet} from "styled-system";

import View from "./View";

const Button = styled(View)`
  font-family: ${themeGet("fontFamily.heading")};
  line-height: 1;
  font-size: 22px;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  &:hover {
    background: ${themeGet("colors.primary.4")};
  }
  &:active {
    background: ${themeGet("colors.primary.3")};
  }
  &:disabled {
    background: ${themeGet("colors.primary.2")};
    cursor: not-allowed;
  }
`;
Button.defaultProps = {
  as: "button",
  bg: "primary.5",
  color: "white",
  borderRadius: 1,
  py: "18px",
  px: 7
};

export default Button;
