import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

type ContainerPropsType = {
  children: ReactNode;
};

export const Container: FC<ContainerPropsType> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
