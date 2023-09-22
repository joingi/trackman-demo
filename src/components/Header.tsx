import { FC } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Flex } from "./Flex";
import { NavigationBar } from "./NavigationBar";
import { Link } from "react-router-dom";

const HeaderContainer = styled(Flex)`
  background-color: var(--color-black);
  width: 100%;
  padding: 70px 45px;
`;

const FindSimulatorText = styled.div`
  color: var(--color-orange-primary);
  font-size: var(--fontSize-nav-text);
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Header: FC = () => {
  return (
    <HeaderContainer alignItems="center" justifyContent="space-between">
      <Flex gap="90px">
        <Link to="/">
          <img width="103px" src={Logo} alt="Trackman" />
        </Link>
        <NavigationBar />
      </Flex>
      <Link to="/">
        <FindSimulatorText>Find a simulator</FindSimulatorText>
      </Link>
    </HeaderContainer>
  );
};
