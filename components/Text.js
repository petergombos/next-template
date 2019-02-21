import styled from "styled-components";
import {
  space,
  width,
  maxWidth,
  fontSize,
  textColor,
  bgColor,
  color,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  fontStyle,
  letterSpacing,
  display
} from "styled-system";

const Text = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${textColor}
  ${bgColor}
  ${color}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${display}
  a{
    color: currentColor;
    text-decoration: underline;
  }
`;

Text.defaultProps = {
  display: "block",
  fontSize: 3,
  lineHeight: 1.5
};

export default Text;

export const H1 = styled(Text)``;
H1.defaultProps = {
  ...Text.defaultProps,
  fontSize: [5, 7],
  color: "grey.10",
  fontFamily: "heading"
};

export const H2 = styled(Text)`
  letter-spacing: 0.2px;
`;
H2.defaultProps = {
  ...Text.defaultProps,
  fontSize: [3, 5],
  color: "grey.9",
  fontWeight: "semibold"
};

export const Caption = styled(Text)`
  letter-spacing: 0.4px;
`;
Caption.defaultProps = {
  ...Text.defaultProps,
  fontSize: [1, 2],
  color: "grey.9"
};
