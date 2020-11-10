import styled from "styled-components"

export const ContentWrapper = styled.div`
  grid-column: 4 / span 8;
  grid-row: 3 / span5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.themes.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadow.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props =>
    `${props.theme.spacings.medium} ${props.themes.spacings.large}`};
  }
`
