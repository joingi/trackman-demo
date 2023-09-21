import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

const StyledContainer = styled(Flex)`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`;

type ContainerPropsType = {
  children: ReactNode;
};

export const Container: FC<ContainerPropsType> = ({ children }) => {
  return (
    <StyledContainer alignItems="center" justifyContent="center">
      {children}
    </StyledContainer>
  );
};
