import { FC } from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.a`
  color: var(--color-white);
  font-size: var(--fontSize-nav-text);
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 1.5px;
`;

type NavigationItemPropsType = {
  linkTo: string;
  navigationItemText: string;
};

export const NavigationItem: FC<NavigationItemPropsType> = ({
  linkTo,
  navigationItemText,
}) => {
  return (
    <StyledNavigationItem href={linkTo}>
      {navigationItemText}
    </StyledNavigationItem>
  );
};
