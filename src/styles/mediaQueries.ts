export const breakpoints = {
  xs: 320,
  sm: 768,
  smExcept: 769,
  md: 992,
  lg: 1200,
  xl: 1920,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mediaQueries;

// Using
// const Box = styled.div<Box>`
//   background-color: red;
//   width: 200px;
//   height: 200px;
//   ${mediaQueries("md")`
//     background-color: green;
//   `};
//   ${props => mediaQueries("md")(`width: ${props.width}px`)}
// `;
